class Car {
    #color;
    #brand;
    #engineSize;

    constructor(obj) {
        if (obj.color.length < 3) {
            return {};
        } else {
            this.#color = obj.color;
        }

        if (obj.brand.length < 2) {
            return {};
        } else {
            this.#brand = obj.brand;
        }

        if (obj.engineSize < 1000 && !typeof obj.engineSize === "number") {
            return {};
        } else {
            this.#engineSize = obj.engineSize;
        }
    }

    displayProduct () {
        console.log(this.#brand, this.#color, this.#engineSize);
    }

    static get Builder() {
        class productBuilder {
            constructor() {
                this.color = undefined;
                this.brand = undefined;
                this.engineSize = undefined;
            }

            setColor(color) {
                this.color = color;
                return this;
            }
            setBrand(brand) {
                this.brand = brand;
                return this;
            }
            setEngineSize(engineSize) {
                this.engineSize = engineSize;
                return this;
            }
            build() {
                return new Car(this);
            }
        }

        return new productBuilder();
    }
}

let x = Car.Builder
    .setColor("Red")
    .setBrand("Toyota")
    .setEngineSize(1500)
    .build();

x.displayProduct();