function isArray(a) {
    return (!!a) && (a.constructor === Array);
};

function isObject(a) {
    return (!!a) && (a.constructor === Object);
};

function isEmpty(item) {
    if (isObject(item)) {
        return Object.keys(item).length === 0;
    } else if (isArray(item)) {
        return item.length === 0;
    } else {
        return !item;
    }
}

module.exports = {
    isArray,
    isObject,
    isEmpty
}