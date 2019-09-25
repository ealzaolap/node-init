"use strict";

function invert(arr) {
    let arr2 = [];

    for (let element of arr) {
        arr2.unshift(element);
    }

    return arr2;
}