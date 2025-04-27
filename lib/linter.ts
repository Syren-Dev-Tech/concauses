import eslint from '@eslint/js';
import globals from 'globals';
import tseslint, { ConfigWithExtends } from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
// @ts-expect-error JavaScript import
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import react from 'eslint-plugin-react';

const eslintPossibleProblems: ConfigWithExtends = {
    rules: {
        'array-callback-return': 'error',
        'no-await-in-loop': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-inner-declarations': 'warn',
        'no-promise-executor-return': 'error',
        'no-self-assign': 'error',
        'no-template-curly-in-string': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable-loop': 'error',
        'no-use-before-define': 'warn',
        'no-useless-assignment': 'warn',
        'require-atomic-updates': 'warn'
    }
};

const eslintStylistic: ConfigWithExtends = {
    plugins: {
        '@stylistic/js': stylisticJs,
        '@stylistic/jsx': stylisticJsx,
        '@stylistic/ts': stylisticTs
    },
    rules: {
        'array-bracket-newline': ['warn', { minItems: 3 }],
        'array-element-newline': ['warn', { minItems: 3 }],
        'linebreak-style': ['warn', 'unix'],
        'multiline-comment-style': ['warn', 'starred-block'],
        'newline-per-chained-call': 'warn',
        'no-confusing-arrow': 'warn',
        'no-extra-semi': 'warn',
        'object-property-newline': 'warn',

        // Overrides
        'comma-dangle': ['warn', 'never'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always']
    }
};

const MAX_COMPLEXITY = 10;
const MAX_DEPTH = 3;
const MAX_NESTED_CALLBACKS = 3;
const eslintSuggestions: ConfigWithExtends = {
    rules: {
        'capitalized-comments': 'warn',
        'class-methods-use-this': 'warn',
        complexity: ['warn', MAX_COMPLEXITY],
        'consistent-return': 'warn',
        'consistent-this': 'warn',
        curly: ['warn', 'multi-or-nest'],
        'default-case': 'warn',
        'default-case-last': 'error',
        'dot-notation': 'warn',
        eqeqeq: 'warn',
        'func-names': 'error',
        'max-classes-per-file': ['warn', 1],
        'max-depth': ['warn', MAX_DEPTH],
        'max-nested-callbacks': ['warn', MAX_NESTED_CALLBACKS],
        'no-alert': 'error',
        'no-array-constructor': 'warn',
        'no-caller': 'error',
        'no-empty-function': 'warn',
        'no-eq-null': 'warn',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-this': 'warn',
        'no-iterator': 'warn',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-magic-numbers': ['warn', {
            enforceConst: true,
            ignore: [
                -1,
                0,
                1
            ],
            ignoreArrayIndexes: true,
            ignoreClassFieldInitialValues: true
        }],
        'no-multi-assign': 'warn',
        'no-multi-str': 'warn',
        'no-negated-condition': 'warn',
        'no-nested-ternary': 'warn',
        'no-new': 'warn',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-object-constructor': 'error',
        'no-octal-escape': 'warn',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-restricted-exports': 'warn',
        'no-restricted-globals': 'warn',
        'no-restricted-imports': 'warn',
        'no-restricted-properties': 'warn',
        'no-restricted-syntax': 'warn',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-sequences': 'warn',
        'no-shadow': 'warn',
        'no-throw-literal': 'warn',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'warn',
        'no-useless-call': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'error',
        'no-void': 'warn',
        'no-warning-comments': 'warn',
        'object-shorthand': 'warn',
        'one-var': ['warn', {
            const: 'never',
            let: 'never'
        }],
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-named-capture-group': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'require-await': 'warn',
        'require-yield': 'warn',
        'sort-keys': [
            'warn',
            'asc',
            {
                allowLineSeparatedGroups: true,
                natural: true
            }
        ],
        'sort-vars': 'warn',
        strict: 'error',
        'symbol-description': 'warn',
        'vars-on-top': 'warn',
        yoda: 'error'
    }
};

export function typescriptConfig() {
    return tseslint.config(
        eslint.configs.recommended,
        eslintPossibleProblems,
        eslintSuggestions,
        eslintStylistic,
        ...tseslint.configs.strict,
        ...tseslint.configs.stylistic
    );
}

const defaultRules = {
    ...eslint.configs.recommended,
    ...eslintPossibleProblems.rules,
    ...eslintSuggestions.rules,
    ...eslintStylistic.rules,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic
};

export function electronViteConfig() {
    return [
        {
            ignores: [
                '**/*.config.js',
                'out',
                'dist'
            ]
        },
        {
            files: ['src/main/**/*.ts'],
            languageOptions: {
                globals: {
                    ...globals.node
                }
            },
            rules: defaultRules
        },
        {
            files: ['src/preload/**/*.js'],
            languageOptions: {
                globals: {
                    ...globals.browser
                }
            },
            rules: defaultRules
        },
        {
            files: ['src/renderer/**/*.js'],
            languageOptions: {
                globals: {
                    ...globals.browser
                }
            },
            rules: defaultRules
        },
        {
            files: ['src/renderer/**/*.jsx'],
            languageOptions: {
                ...reactRecommended.languageOptions,
                globals: {
                    ...globals.browser
                }
            },
            plugins: {
                react
            },
            rules: {
                ...defaultRules,
                ...reactRecommended.rules,
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off'
            }
        }
    ];
}

export function reactViteConfig() {
    return [
        {
            ignores: [
                'dist',
                'out',
                'build',
                '*.cjs',
                '**/*.config.js',
                '**/*.config.mjs',
                '**/*.config.cjs'
            ]
        },
        {
            files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
            languageOptions: {
                ...reactRecommended.languageOptions,
                globals: {
                    ...globals.browser
                }
            },
            settings: {
                react: {
                    version: 'detect'
                }
            }
        },
        {
            files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
            ...react.configs.flat.recommended
        },
        {
            files: ['**/*.ts'],
            rules: {
                ...eslint.configs.recommended.rules,
                ...reactRecommended.rules
            }
        },
        {
            files: ['**/*.tsx'],
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true
                    }
                }
            },
            rules: {
                ...eslint.configs.recommended.rules,
                ...reactRecommended.rules,
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off'
            }
        },
        {
            files: ['**/*.{ts,tsx}'],
            rules: {
                '@typescript-eslint/no-unused-vars': ['warn', {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }],
                'no-undef': 'off',
                'no-unused-vars': 'off'
            }
        }
    ];
}