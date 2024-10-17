// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code'
import fs from 'node:fs' 

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DDBKit',
			favicon: "./src/assets/ddbkit-icon.png",
			logo: {
				src: "./src/assets/ddbkit-icon.png"
			},
			social: {
				github: 'https://github.com/llsc12/DDBKit',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'./src/styles/landing.css'
			],
			expressiveCode: {
				styleOverrides: { borderRadius: '0.5rem' },
				themes: ['vesper']
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is it?', slug: 'start-here/about' },
						{ label: 'Getting started', slug: 'start-here/getting-started' },
						{ label: 'Running your bot', slug: 'start-here/running-your-bot' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
