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
				github: 'https://github.com/DDBKit/DDBKit',
				discord: 'https://discord.gg/CkB2QzVsCz'
			},
			editLink: {
                baseUrl: "https://github.com/DDBKit/DDBKit-docs/tree/master/"
            },
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/headingLinks.css',
				'./src/styles/paginationLinks.css',
				'./src/styles/terminals.css',
				'./src/styles/landing.css',
				'./src/styles/discord.css',
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
					label: 'Extras',
					autogenerate: { directory: 'extras' },
				}
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
