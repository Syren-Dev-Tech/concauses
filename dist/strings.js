export function prettyString(str, options) {
    if (!str)
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
export function capitalize(str) {
    if (!str)
        return '';
    return (str[0] || '').toUpperCase + str.slice(1);
}
