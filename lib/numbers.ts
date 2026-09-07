/**
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} A random number between min (inclusive) and max (exclusive).
 */
export function random(min: number, max: number): number {
    return min + Math.random() * (max - min); // NOSONAR - Allowed use of random
}
