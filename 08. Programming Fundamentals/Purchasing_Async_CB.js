function selectCar(car, cb) {
    console.log("In process of selecting car...");
    setTimeout(() => {
        console.log("Selected car: " + car+".");
        cb?.(car);
    },1000);
}

function startLoanProcess(car, cb) {
    console.log("Starting LoanProcess...");
    setTimeout(() => {
        console.log("Finished LoanProcess of your", car+".");
        cb?.(car);
    },2000);
}

function getDelivery (car) {
    console.log("Showroom has started delivery process...");
    setTimeout(() => {
        console.log(car, "is Delivered.");
    },3000)
}

selectCar("Swift", (car) => {
    startLoanProcess(car, () => {
        getDelivery(car);
    });
})