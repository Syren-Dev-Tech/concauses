# ShipShape

This is a package containing a handful of helper functions and configs I use in various projects of mine.

## Yarn Config

> `.yarnrc.yml`

```yml
approvedGitRepositories:
    - '**'

enableScripts: true

nodeLinker: node-modules

npmMinimalAgeGate: 0

npmRegistries:
    'https://npm.pkg.github.com':
        npmAuthToken: '${GITHUB_TOKEN}'

npmScopes:
    dead-harbour:
        npmRegistryServer: 'https://npm.pkg.github.com'
```

## Linters

### Oxlint

> `oxlint.config.ts`

```ts
import oxlintConfig from '@dead-harbour/shipshape/oxlint';

export default oxlintConfig();
```

### Oxfmt

> `oxfmt.config.ts`

```ts
import oxfmtConfig from '@dead-harbour/shipshape/oxfmt';

export default oxfmtConfig();
```

### Stylelint

> `stylelint.config.mjs`

```js
import { stylelint } from '@dead-harbour/shipshape/stylelint';

export default stylelint();
```
