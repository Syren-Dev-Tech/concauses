# CoNcauses

This is a package containing a handful of helper functions and configs I use in various projects of mine.

## Linter

Using this package:

```ts
// @ts-check

import { reactViteConfig, typescriptConfig } from '@syren-dev-tech/concauses';

export default [...typescriptConfig(), ...reactViteConfig()];
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

## Numbers

- `random(min, max)`
    - Returns a random number between `min` and `max`.

## Sorting

- `sortByValue<T>(a, b)`
    - Generic sorting function of `a` to `b` of type `T` (`Sortable`)

- `sortArray<T>(arr, sortFn)`
    - Alias for `arr.sort(sortFn)` of type `T[]`

- `sortObjects<T>(arr, key)`
    - Alias for `arr.sort` for `a[key]` to `b[key]` of type `T[]` (`object`)

## Strings

- `capitalize(str)`
    - Capitalizes the first character of a string

- `prettyString(str, options)`
    - Splits a string on hypens, underscores, and whitespace (`\s`) and joins it back to a single string
    - This will convert a string `something_like_this` to `something like this`
    - Options (optional):
        - `capitalize`
            - `"all"` - capitalize the first of each word
            - `"first"` - capitalize the first of the first word
            - `undefined` / default - no capitalization