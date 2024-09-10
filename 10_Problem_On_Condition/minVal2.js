function minimum_Val(val1,val2,val3) {
    if (val1 < val2 && val1 < val3) {
        return val1;
    }else if (val2 < val1 && val2 < val3) {
        return val2;
    } else {
        return val3;
    }
}

console.log(minimum_Val(1,2,3));
console.log(minimum_Val(2,1,3));
console.log(minimum_Val(2,3,1));
