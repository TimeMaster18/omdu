const base62Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const encode = function (value, forceLengthTwo = false) {
    if (value === undefined || value === null) value = 0;
    if (value < 0 || value >= 3844) { // 62 * 62 = 3844
        throw new Error("Value must be in the range 0-3843.");
    }

    if (value < 62 && !forceLengthTwo) {
        return base62Chars[value];
    }

    const high = Math.floor(value / 62);
    const low = value % 62;
    return `${base62Chars[high]}${base62Chars[low]}`;
}

export const decode = function (str) {
    if (str.length === 1) {
        let value = base62Chars.indexOf(str[0]);
        if(value === 0) return null;
        else return value;
    } else if (str.length === 2) {
        const high = base62Chars.indexOf(str[0]);
        const low = base62Chars.indexOf(str[1]);
        let value = high * 62 + low;
        if(value === 0) return null;
        else return value;
    } else {
        throw new Error("Invalid Base62 encoded string length.");
    }
}
