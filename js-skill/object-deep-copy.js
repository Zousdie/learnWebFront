function deepCopy (source) {
    if (!source || typeof source !== 'object') {
        throw new Error('error arguments');
    }
    const r = Array.isArray(source) ? [] : Object.create(Object.getPrototypeOf(source));
    Object.keys(source).forEach((key) => {
        r[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    });
    return r;
}

const o = {
    x: 0,
    setX (value) {
        this.x = value;
    },
    a: {
        x: 1,
        getX () {
            return this.x;
        },
    },
};

const a = deepCopy(o);
console.log(a);
