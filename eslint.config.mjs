// @ts-check

import { reactViteConfig, typescriptConfig } from './dist/lib/linter.js';

export default [...typescriptConfig(), ...reactViteConfig()];