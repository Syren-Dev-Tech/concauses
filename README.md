# CoNcauses

This is a package containing a handful of helper functions and configs I use in various projects of mine.

## ESLint Configuration

Using this package:

```ts
// @ts-check

import { reactViteConfig, typescriptConfig } from '@chrisofnormandy/concauses/linter';

export default [
    ...typescriptConfig(),
    ...reactViteConfig()
];
```

Without this package:

```ts
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic
);
```