module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	root: true,
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				'newlines-between': 'always',
			},
		],
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {},
		},
	],
};
