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

async function gen () {
    try {
        console.log("Step1....")
        let step1 = await addToCart();
        console.log("Step2....")
        let step2 = await makePayment();
        console.log("Step3....")
        let step3 = await checkOut();
        console.log("Done")
        return "Done";
    } catch (e) {
        console.error("Something is wrong", e);
    }
}

gen();