function customSeal (obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        Object.defineProperty(obj, keys[i], {configurable:false});
    }
    Object.preventExtensions(obj);
}

const a = {
    a: 10,
    b: 20,
    c: 30
}

customSeal(a);
delete a.a;
a.a = 20;
console.log(a)

