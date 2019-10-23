/**
 * TODO.
 */
/**
 * Conditionally render css via template literal (CSS in JS)
 * by providing query string and breakpoint to measure against.
 * Acts as a proxy to `resolveBp` core function.
 *
 * @param query - Breakpoint query string.
 * @param bp - Breakpoint name, or px size to resolve query against.
 * @returns CSS.
 */
export declare const bpc: (query: string, bpName: string | number) => (css: any) => any;
