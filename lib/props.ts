import { uniqueKey } from './strings';

type ClassName = string | number | boolean;

export interface PartsProps<T> {
    parts?: T;
}

/**
 * Combines multiple class names into a single string, ensuring that only valid class names are included.
 * @param classes - An array of class names, which can be strings, numbers, booleans, or undefined.
 * @returns A string of combined class names or undefined if no valid class names are provided.
 */
export function getClassName(...classes: (ClassName | undefined)[]) {
    const classSet = new Set<string>();

    const addValidClass = (s: string) => {
        if (s !== '') classSet.add(s);
    };

    for (const c of classes) {
        if (c !== undefined && c !== null && typeof c !== 'boolean') {
            const spl = c.toString().split(' ');
            for (const s of spl) addValidClass(s);
        }
    }

    if (classSet.size === 0) return undefined;

    return [...classSet].join(' ');
}

/**
 * Generates a unique ID based on a prefix and an optional provided ID.
 * @param prefix - The prefix for the ID.
 * @param id - An optional ID. If not provided, a unique ID will be generated.
 * @returns The provided ID or a unique ID with the given prefix.
 */
export function getId(prefix: string, id?: string) {
    return id ?? uniqueKey(prefix);
}

/**
 * Returns the provided parts or an empty object if no parts are provided.
 * @param parts - An optional object of parts.
 * @returns The provided parts or an empty object.
 */
export function getParts<T>(parts: T): T;
export function getParts(parts?: undefined): Record<string, never>;
export function getParts<T>(parts?: T) {
    return parts ?? {};
}
