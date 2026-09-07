export interface PrettyOptions {
    capitalize?: 'none' | 'first' | 'all';
    splitOn?: string | RegExp;
    join?: string;
}

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to be capitalized.
 * @returns The input string with the first letter capitalized.
 */
export function capitalize(str: string) {
    if (str === '') return '';

    return (str[0] || '').toUpperCase() + str.slice(1);
}

/**
 * Converts a string into a more human-readable format by splitting it based on specified delimiters and optionally capitalizing parts of it.
 * @param str - The string to be prettified.
 * @param options - An optional object containing formatting options:
 *   - capitalize: Determines how to capitalize the parts of the string ('none', 'first', or 'all').
 *   - splitOn: A string or regular expression used to split the input string (default is /[-_\s]/g).
 *   - join: A string used to join the split parts back together (default is a single space).
 * @returns A prettified version of the input string based on the provided options.
 */
export function prettyString(str: string, options?: PrettyOptions) {
    if (str === '') return '';

    const splitOn = options?.splitOn || /[-_\s]/g;
    const join = options?.join ?? ' ';
    const spl = str.split(splitOn);

    switch (options?.capitalize) {
        case 'all': {
            return spl.map(capitalize).join(join);
        }
        case 'first': {
            return [capitalize(spl[0] || ''), ...spl.slice(1)].join(join);
        }
        default: {
            return spl.join(join);
        }
    }
}

const UUID_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const UUID_BYTES = 16;

/**
 * Generates a unique identifier (UUID) string based on a template.
 * The generated UUID follows the format of 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', where 'x' is replaced with a random hexadecimal digit and 'y' is replaced with a random hexadecimal digit from the set {8, 9, A, B}.
 * @returns A unique identifier string in the UUID format.
 */
export function uniqueId() {
    return UUID_TEMPLATE.replaceAll(/[xy]/g, (c) => {
        const r = Math.trunc(Math.random() * UUID_BYTES); // NOSONAR - Allowed use of random
        // oxlint-disable-next-line no-magic-numbers
        const v = c === 'x' ? r : (r & 0x3) | 0x8;

        return v.toString(UUID_BYTES);
    });
}

/**
 * Generates a unique key by combining an optional prefix with a unique identifier.
 * @param prefix - An optional string to be prefixed to the unique identifier.
 * @returns A unique key string that consists of the provided prefix followed by a unique identifier.
 */
export function uniqueKey(prefix?: string) {
    return (prefix || '') + uniqueId();
}
