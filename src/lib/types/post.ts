export interface Post {
    slug: string;
    title: string;
    publishedAt: string;
    author: string;
    tags: string[];
    excerpt: string;
    categories: string[];
    featuredImage: {
        url: string;
        alt: string;
        caption: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
        ogImage: string;
    };
    published: boolean;
}

// Optional type for metadata from import.meta.glob
export interface PostModule {
    metadata: Omit<Post, 'slug'>;
    default: any;
}

// State management type if needed
export interface PostState {
    posts: Post[];
    isLoading: boolean;
    error: string | null;
}