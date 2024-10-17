import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	site: "https://ddbkit.pages.dev",
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],

			title: 'DDBKit',
			favicon: "./src/assets/ddbkit-icon.png",
			lastUpdated: true,
			pagination: true,
			logo: {
				src: "./src/assets/ddbkit-icon.webp"
			},
			social: {
				github: 'https://github.com/llsc12/DDBKit',
				discord: 'https://discord.gg/'
			},
			editLink: {
                baseUrl: "https://github.com/darwinx64/DDBKit-docs/tree/main/"
            },
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/headingLinks.css',
				'./src/styles/landing.css'
			],
			expressiveCode: {
				styleOverrides: { borderRadius: '0.5rem' },
				themes: ['vesper']
			},
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'start-here' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
    markdown: {
        rehypePlugins: [
            rehypeHeadingIds,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap"
                }
            ]
        ]
    }
});