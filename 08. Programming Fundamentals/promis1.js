const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rNumber = Math.floor(Math.random() * 100);
        if (rNumber % 2 === 0) {
            console.log(rNumber, " is even");
            resolve(rNumber);
        } else {
            console.log(rNumber, " is odd");
            reject(rNumber);
        }
    },1500);
})

setTimeout(() => {
    console.log(pr);
},1000)

setTimeout(() => {
    console.log(pr)
},1800)