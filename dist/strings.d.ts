interface PrettyOptions {
    capitalize?: 'none' | 'first' | 'all';
    splitOn?: string | RegExp;
    join?: string;
}
export declare function prettyString(str: string, options?: PrettyOptions): string;
export declare function capitalize(str: string): string;
export {};
