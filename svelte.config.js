import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getSingletonHighlighter } from 'shiki';

// Cache highlighter instance
let shikiHighlighter = null;

const getShikiHighlighter = async () => {
	if (!shikiHighlighter) {
		shikiHighlighter = await getSingletonHighlighter({
			themes: ['github-dark'],
			langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'bash', 'markdown']
		});
	}
	return shikiHighlighter;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getShikiHighlighter();
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme: 'github-dark' })
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;