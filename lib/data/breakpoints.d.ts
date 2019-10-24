export declare const BREAKPOINTS: {
    [value: string]: number;
};
/**
 * Returns the breakpoint 'upper-limit' width in pixels,
 * which is essentially the width of the next breakpoint.
 *
 * @param bpName - Named breakpoint
 */
export declare function getBpUpperLimit(bpName: string): number | null;
/**
 * Resolves a breakpoint query against a specified breakpoint or value. Query
 * string must be in format `${lower}, ${upper}` (comma separated), where lower/upper
 * are either named breakpoints or px values. Upper is optional.
 *
 * @param query - Breakpoint query string.
 * @param bp - Breakpoint name, or px size to resolve query against.
 */
export declare function resolveBp(query: string, bp: string | number): boolean;
