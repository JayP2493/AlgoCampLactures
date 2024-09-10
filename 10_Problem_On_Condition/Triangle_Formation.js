function triangle_Formation (length1, length2, length3) {
    if (length1+length2 > length3 && length2+length3 > length1 && length1+length3 > length2) {
        return true;
    } else {
        return false;
    }
}

console.log(triangle_Formation(5,6,10))
console.log(triangle_Formation(1,6,10))