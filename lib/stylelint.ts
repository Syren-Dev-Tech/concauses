import type { Config } from 'stylelint';

export function stylelint(): Config {
    return {
        extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', '@stylistic/stylelint-config'],
        plugins: ['stylelint-scss', '@stylistic/stylelint-plugin'],
        rules: {
            '@stylistic/string-quotes': 'single',
            'comment-empty-line-before': 'always',
            'rule-empty-line-before': ['always', { except: ['after-single-line-comment'] }],
            'scss/at-else-closing-brace-newline-after': null,
            'scss/at-else-closing-brace-space-after': null,
            'scss/at-if-closing-brace-newline-after': null,
            'scss/at-if-closing-brace-space-after': null
        }
    };
}
