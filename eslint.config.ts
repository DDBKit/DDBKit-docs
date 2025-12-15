import eslintAstroPlugin from "eslint-plugin-astro"
import tsParser from "@typescript-eslint/parser"
import * as tseslint from "@typescript-eslint/eslint-plugin"
import stylistic from "@stylistic/eslint-plugin"
import * as mdx from "eslint-mdx"

export default [
	...eslintAstroPlugin.configs.recommended,

	{
		plugins: {
			stylistic,
		},
		rules: {
			"stylistic/comma-dangle": ["error", "always-multiline"],
			"stylistic/quotes": ["error", "double"],
			"stylistic/semi": ["error", "never"],
			"stylistic/max-len": ["error", { code: 80, ignoreStrings: true }],
			"stylistic/indent": ["error", "tab"],
		},
	},

	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				project: "./tsconfig.json",
				sourceType: "module",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
	},


	{
		files: ["**/*.mdx"],
		languageOptions: {
			parser: mdx.parser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		plugins: {
			mdx,
			stylistic,
		},
		rules: {
			"stylistic/max-len": ["error", { code: 80 }],
			"stylistic/indent": ["error", 4],
		},
	},
]
