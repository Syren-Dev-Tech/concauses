export type Sortable = string | number | Date | boolean;

export function sortByValue<T = Sortable>(a: T, b: T) {
    if (a < b)
        return -1;

    if (a > b)
        return 1;

    return 0;
}

export function sortArray<T = Sortable>(arr: T[], sortFn: (a: T, b: T) => number) {
    return arr.sort(sortFn);
}

export function sortObjects<T>(arr: T[], key: keyof T) {
    return arr.sort((a, b) => sortByValue(a[key], b[key]));
}