function addToCart() {
    return new Promise((resolve, reject) => {
        console.log("Adding item to cart");
        let temp = Math.floor(Math.random() * 100);
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

function CheckOut() {
    return new Promise((resolve, reject) => {
        console.log("Check Out process started");
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

function purchaseItem() {
    addToCart()
        .then(() => makePayment())
        .then(() => CheckOut())
        .catch(err => console.log("Got Error:", err));  // Updated to show error details
}

purchaseItem();
