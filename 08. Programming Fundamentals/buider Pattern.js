class Product {
    #name;
    #price;
    #description;

    constructor(builder) {
        this.#name = builder.name;
        this.#price = builder.price;
        this.#description = builder.description;
    }

    static get Create() {
        class CreateProduct {
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

        return new CreateProduct;
    }

    displayProduct() {
        console.log("Display Product",this.#name, this.#price, this.#description);
    }
}
let a =0;

let p = new Product.Create()
    .setPrice(5000)
    .setName("Iphone 11")
    .setDescription("256 GB")
    .build();

p.displayProduct();