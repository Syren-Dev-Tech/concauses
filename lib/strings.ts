export interface PrettyOptions {
    capitalize?: 'none' | 'first' | 'all'
    splitOn?: string | RegExp
    join?: string
}

export function capitalize(str: string) {
    if (str === '')
        return '';

    return (str[0] || '').toUpperCase() + str.slice(1);
}

export function prettyString(str: string, options?: PrettyOptions) {
    if (str === '')
        return '';

    const splitOn = options?.splitOn || /[-_\s]/g;
    const join = options?.join || ' ';
    const spl = str.split(splitOn);

    switch (options?.capitalize) {
        case 'all': return spl.map(capitalize).join(join);
        case 'first': return [capitalize(spl[0] || ''), ...spl.slice(1)].join(join);
        default: return spl.join(join);
    }
}