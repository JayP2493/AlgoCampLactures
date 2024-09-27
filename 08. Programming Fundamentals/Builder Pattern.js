class product {
    constructor(x) {
        if (x.name === undefined) {
            console.log("Please enter a name");
            this.name = undefined;
        } else {
            this.name = x.name;
        }
        this.price = x.price;
        this.description = x.description;
        this.discount = x.discount;
        this.value = x.value;
    }
}

let p = new product({
    // name: "xyz",
    price: 5,
    discount: 5,
})

console.log(p);