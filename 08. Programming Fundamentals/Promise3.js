let p1 = new Promise((resolve, reject) => {
    console.log("P1 Started")
    setTimeout(() => {
        console.log("P1 Ended");
        resolve(10);
    },1000)
})

p1.then((result) => {
    console.log("First Started");
    setTimeout(() => {
        console.log("First Done");
    },1000)
})

p1.then((result) => {
    console.log("Second Started");
    setTimeout(() => {
        console.log("Second Done");
    },500)
})

console.log("Main Code End")