function triangle_Formation (length1, length2, length3) {
    if (length1+length2 > length3 && length2+length3 > length1 && length1+length3 > length2) {
        return true;
    } else {
        return false;
    }
}

function type_of_Triangle (length1, length2, length3) {
    if (triangle_Formation(length1, length2, length3)) {
        if (length1 === length2 && length2 === length3) {
            return "Equilateral Triangle";
        } else if ((length1 === length2) || (length1 === length3) || (length2 === length3)) {
            return "Isosceles Triangle";
        } else {
            return "Scalene Triangle";
        }
    } else {
        return "Triangle formation is not possible";
    }
}

console.log(type_of_Triangle(5,6,10))
console.log(type_of_Triangle(1,6,10))
console.log(type_of_Triangle(10,6,10))
console.log(type_of_Triangle(10,10,10))