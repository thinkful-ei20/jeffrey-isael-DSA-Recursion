'use strict';

function splitString(str, separator) {
    if (str.length === 0) {
        return [];
    }

    const index = str.indexOf(separator);
    if (index === -1) {
        return [str];
    }
    return [str.slice(0, index), ...splitString(str.slice(index + 1), separator)];
}

console.log(splitString('Hello.World..Thinkful.', '.'));
