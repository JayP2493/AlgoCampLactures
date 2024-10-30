function addToCart() {
    return new Promise((resolve, reject) => {
        console.log("Adding item to cart");
        let temp = Math.floor(Math.random() * 100);
        // let temp = 2;
        setTimeout(() => {
            if (temp % 2 === 0) {
                resolve(temp);
                console.log("Item Added");
            } else {
                reject(`Error in addToCart with value ${temp}`);
            }
        }, 500);
    });
}

function makePayment() {
    return new Promise((resolve, reject) => {
        console.log("Making Payment");
        // let temp = 2;
        let temp = Math.floor(Math.random() * 100);
        setTimeout(() => {
            if (temp % 2 === 0) {
                resolve(temp);
                console.log("Payment completed");
            } else {
                reject(`Error in makePayment with value ${temp}`);
            }
        }, 1000);
    });
}

function checkOut() {
    return new Promise((resolve, reject) => {
        console.log("Check Out process started");
        // let temp = 2;
        let temp = Math.floor(Math.random() * 100);
        setTimeout(() => {
            if (temp % 2 === 0) {
                resolve(temp);
                console.log("Check out done!!");
            } else {
                reject(`Error in CheckOut with value ${temp}`);
            }
        }, 2000);
    });
}

function* gen () {
    console.log("Step1....")
    let step1 = yield addToCart();
    console.log("Step2....")
    let step2 = yield makePayment();
    console.log("Step3....")
    let step3 = yield checkOut();
    console.log("Done")

    return;
}

let steps = gen();
let genin = 0;
function genStart () {
    console.log("In gen",genin++);
    let result = steps.next();
    if (result.done) return undefined;
    result.value.then( (res) => {
        genStart();
    })
}

genStart ();