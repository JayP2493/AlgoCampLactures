const p = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random() * 15);
    console.log("Working...")

    setTimeout(() => {
        if (a % 2 === 0) {
            console.log("Jay")
            resolve();
        } else {
            console.log("Mishti")
            reject();
        }
    },500)
})

console.log("Hello")
console.log(p);
