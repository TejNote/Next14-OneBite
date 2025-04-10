module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'no-console': ['warn', { allow: ['info', 'error'] }],
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'jsx-a11y/alt-text': 'off',
		'import/order': [
			'error',
			{
				groups: [
					'type',
					['builtin', 'external'],
					'internal',
					'parent',
					'sibling',
					'index',
				],
				pathGroups: [
					{
						pattern: '{react*,react*/**}',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '{@*/**,@*}',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: 'public/**',
						group: 'internal',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['react', 'next'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				allowSeparatedGroups: true,
			},
		],
	},
}
