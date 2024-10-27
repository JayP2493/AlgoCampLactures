console.log("Start")
let p1 = new Promise((resolve) => {
    console.log("P1 Started");
    setTimeout(() => {
        console.log("P1 Done");
        resolve();
    }, 500);
});

let p2 = new Promise((resolve) => {
    console.log("P2 Started");
    setTimeout(() => {
        console.log("P2 Done");
        resolve();
    },1500)
})

p1.then(function() {console.log("P1 CB Done")});
console.log("print", p2.then(function() {console.log("P2 CB Done")}))

for (let i = 0; i < 100000000; i++) {}
for (let i = 0; i < 100000000; i++) {}

console.log("End");
