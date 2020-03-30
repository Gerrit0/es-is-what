"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

import { IObject } from "../object/interfaces/object";

import { IIteratorLike } from "./interface/iterator-like";

export function isIteratorLike<T extends IIteratorLike = IIteratorLike>(payload: unknown): payload is T
{
    return (isAnyObject<IObject>(payload) && isAnyFunction(payload.next));
}
