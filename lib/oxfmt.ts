import { defineConfig } from 'oxfmt';

export default function oxfmtConfig() {
    return defineConfig({
        arrowParens: 'always',
        ignorePatterns: ['dist', 'node_modules', '*.css', '*.scss'],
        jsxSingleQuote: true,
        overrides: [
            {
                files: ['*.yml'],
                options: {
                    tabWidth: 2
                }
            }
        ],
        printWidth: 256,
        semi: true,
        singleQuote: true,
        sortImports: true,
        sortPackageJson: false,
        tabWidth: 4,
        trailingComma: 'none',
        useTabs: false
    });
}
