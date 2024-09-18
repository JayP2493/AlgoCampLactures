class Product {

    constructor(name, price, description, rating) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.rating = rating;
    }

    buyProduct() {
        console.log("Product bought");
    }
    updatePrice() {
        console.log("Update price");
    }
}

const iphone = new Product("iphone","12000","something",4.5);

console.log(iphone);