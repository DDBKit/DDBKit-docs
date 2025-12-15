import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { DISCORD, GITHUB } from "./src/constants";

export default defineConfig({
	vite: {
		server: {
			host: "0.0.0.0",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			allowedHosts: ["vicks-macbook-pro.tailbf850.ts.net"],
		},
	},
	integrations: [
		starlight({
			title: "DDBKit",
			customCss: ["src/global.css"],
			favicon: "/favicon.png",
			lastUpdated: true,
			editLink: {
				baseUrl: "https://github.com/DDBKit/docs/tree/master/",
			},
			logo: {
				src: "./src/assets/favicon.png",
			},
			expressiveCode: {
				styleOverrides: { borderRadius: "0.5rem" },
				themes: ["vesper"],
				tabWidth: 0,
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: GITHUB,
				},
				{
					icon: "discord",
					label: "Discord",
					href: DISCORD,
				},
			],
			sidebar: [
				{
					label: "",
					items: [{ label: "Preamble", slug: "preamble/preamble" }],
				},
				{
					label: "Guides",
					items: [
						{
							label: "Getting started",
							slug: "guides/getting-started",
						},
						{
							label: "Slash commands",
							slug: "guides/slash-commands",
						},
						{ label: "Building messages", slug: "guides/messages" },
						{ label: "Handling events", slug: "guides/events" },
						{
							label: "Handling errors",
							slug: "guides/handling-errors",
						},
						{ label: "Using DiscordBM", slug: "guides/discordbm" },
						{
							label: "Recommended Structure",
							slug: "guides/recommended-structure",
						},
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "More",
					autogenerate: { directory: "more" },
				},
			],
		}),
	],
});
