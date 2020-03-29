"use strict";

/**
 * Determine whether the payload is `undefined` or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 * 
 * @example
 * isUndefined(undefined);
 * // > true
 * 
 * isUndefined(null);
 * // > false
 */
export function isUndefined(payload: unknown): payload is undefined
{
    return (typeof payload === "undefined");
}