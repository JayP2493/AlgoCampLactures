class Product {
    #name;
    #price;
    #description;

    constructor(builderObject) {

        if (builderObject.name.length >= 3) {
            this.#name = builderObject.name;
        } else {
            console.log("Name Should be at least 3 characters");
        }

        if (builderObject.price >= 500) {
            this.#price = builderObject.price;
        } else {
            console.log("price is less than 500");
        }

        if (builderObject.description.length >= 10) {
            this.#description = builderObject.description;
        } else {
            console.log("description is less than 10 characters");
        }
    }

    printName() {
        console.log(`${this.#name} ${this.#price} ${this.#description}`);
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = undefined;
                this.price = undefined;
                this.description = undefined;
            }

            setPrice(price) {
                this.price = price;
                return this;
            }

            setDescription(description) {
                this.description = description;
                return this;
            }

            setName(name) {
                this.name = name;
                return this;
            }

            build() {
                return new Product(this);
            }
        }

        return Builder;
    }
}

let x = new Product.Builder().setName("S24 Ultra").setPrice(56260).setDescription("It is very good product with very good camera and display and AI").build();

x.printName();