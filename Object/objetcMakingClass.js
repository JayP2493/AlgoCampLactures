class Product {
    #name
    #dis
    #price

    print () {
        console.log(`The price of ${this.#name} ${this.#dis} is ${this.#price}`);    
    }

    constructor(parameters) {
        this.#name = parameters.name;
        this.#dis = parameters.dis;
        this.#price = parameters.price;
    }

    static get Create() {
        return class ToCreate {
            
            setPrice (x) {
                this.price = x;
                return this;
            }

            setDis (x) {
                this.dis = x;
                return this;
            }

            setName (x) {
                this.name = x;
                return this;
            }

            done () {
                return new Product(this);
            }
        }
        
        return ToCreate;
    }
}

let p = new Product.Create()
    .setPrice(100000)
    .setName("Iphone 13 Pro Max")
    .setDis("256 GB")
    .done();

p.print();