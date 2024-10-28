function selectCar(car) {
    return new Promise ((resolve, reject) => {
        console.log("In process of selecting car...");
        setTimeout(() => {
            console.log("Selected car: " + car+".");
            resolve(car);
        },1000);
    })
}

function startLoanProcess(car) {
    return new Promise ((resolve, reject) => {
        console.log("Starting LoanProcess...");
        setTimeout(() => {
            console.log("Finished LoanProcess of your", car+".");
            resolve(car);
        },2000);
    })
}

function getDelivery (car) {
    return new Promise ((resolve, reject) => {
        console.log("Showroom has started delivery process...");
        setTimeout(() => {
            console.log(car, "is Delivered.");
            resolve(car);
        },3000)
    })
}

function getCar (car) {
    selectCar(car)
        .then(() => startLoanProcess(car))
        .then(() => getDelivery(car))
}

getCar("Swift");