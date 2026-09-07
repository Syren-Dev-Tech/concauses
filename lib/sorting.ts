export type Sortable = string | number | Date | boolean;

/**
 * Compares two values of type T and returns a number indicating their relative order.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns A negative number if a is less than b, a positive number if a is greater than b, or 0 if they are equal.
 */
export function sortByValue<T = Sortable>(a: T, b: T) {
    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
}

/**
 * Sorts an array of type T using a provided sorting function.
 * @param arr - The array to be sorted.
 * @param sortFn - A function that defines the sort order by comparing two elements of type T.
 * @returns A new array sorted according to the provided sorting function.
 */
export function sortArray<T = Sortable>(arr: T[], sortFn: (a: T, b: T) => number) {
    return arr.toSorted(sortFn);
}

/**
 * Sorts an array of objects based on a specified key.
 * @param arr - The array of objects to be sorted.
 * @param key - The key of the objects to sort by.
 * @returns A new array of objects sorted by the specified key.
 */
export function sortObjects<T>(arr: T[], key: keyof T) {
    return arr.toSorted((a, b) => sortByValue(a[key], b[key]));
}
