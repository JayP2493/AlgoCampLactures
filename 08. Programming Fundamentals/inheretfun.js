function Chai (type) {
    this.type = type;
}

Chai.prototype.prepare = function () {
    console.log("Chai: " + this.type);
}

function GreenTea (cold) {
    Chai.call(this, "Green Tea");
    this.cold = cold;
}

Greentea.prototype = Object.create(Chai.prototype);
