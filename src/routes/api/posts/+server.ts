import { json, error } from '@sveltejs/kit'
import type { Post } from '$lib/types/post'

async function getPosts(): Promise<Post[]> {
    try {
        // Define the post files pattern
        const paths = import.meta.glob<{
            metadata: Omit<Post, 'slug'>
        }>('/src/posts/*.md', { eager: true })

        // Transform and filter posts using array methods
        const posts = Object.entries(paths)
            .map(([path, file]) => {
                const slug = path.split('/').at(-1)?.replace('.md', '')

                if (!slug || !file?.metadata) {
                    console.warn(`Invalid post file: ${path}`)
                    return null
                }

                return {
                    ...file.metadata,
                    slug
                } satisfies Post
            })
            .filter((post): post is Post => {
                return post !== null && post.published === true
            })
            .sort((a, b) =>
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            )

        return posts

    } catch (err) {
        console.error('Error loading posts:', err)
        throw error(500, 'Error loading blog posts')
    }
}

export async function GET() {
    try {
        const posts = await getPosts()

        // Return 404 if no posts found
        if (posts.length === 0) {
            throw error(404, 'No posts found')
        }

        return json(posts, {
            // Add cache headers
            headers: {
                'Cache-Control': 'public, max-age=3600'
            }
        })
    } catch (err) {
        // Re-throw SvelteKit errors
        if (err instanceof Error && 'status' in err) {
            throw err
        }
        // Handle other errors
        console.error('Error in GET handler:', err)
        throw error(500, 'Internal server error')
    }
}