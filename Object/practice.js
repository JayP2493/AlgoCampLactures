class Mold {
    #moldbaseWidth
    #moldbaseLength
    #brand
    #material
    
    constructor(parameters) {
        this.#moldbaseWidth = parameters.moldbaseWidth,    
        this.#moldbaseLength = parameters.moldbaseLength,
        this.#material = parameters.material,    
        this.#brand = parameters.brand;
    }

    print () {
        console.log(`You have selected mold base from ${this.#brand} and dimension is ${this.#moldbaseWidth}mm X ${this.#moldbaseLength}mm and material is ${this.#material}`)
    }

    static get Create() {
        class CreateP {
            constructor() {
                this.moldbaseWidth = undefined,    
                this.moldbaseLength = undefined,
                this.material = undefined,    
                this.brand = undefined;
            }

            setMwidth(x) {
                this.moldbaseWidth = x;
                return this;
            }

            setLength(x) {
                this.moldbaseLength = x;
                return this;
            }

            setMaterial(x) {
                this.material = x;
                return this;
            }

            setBrand (x) {
                this.brand = x;
                return this;
            }

            create () {
                return new Mold(this);
            }
        }

        return CreateP
    }
}

let p = new Mold.Create()
                .setMwidth(600)
                .setLength(600)
                .setMaterial("P20")
                .setBrand("Hasco")
                .create();
p.print();
