import eslint from '@eslint/js';
import globals from 'globals';

export default [
    eslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: 'latest',
            },
        },
        rules: {
            'prefer-const': 'error',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
];
