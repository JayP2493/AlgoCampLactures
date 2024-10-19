function fun (abc) {
    return abc;
}

fun.__proto__.toString = function () {
    return "fun Function is called, "
}

console.log(fun + "Transection is failed")