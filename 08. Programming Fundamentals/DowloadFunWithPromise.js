function downloadFiles (filename, filePath, cb, value) {
    console.log("Downloading " + filename + " file...");
    setTimeout(() => {
        console.log("Finished downloading " + filename + " file...");
        cb({
            filename: filename,
            filePath: filePath
        }, value)
    }, 1000);
}

let abc = {

};

downloadFiles("ABC","SDF", (obj,value) => {
    value.filename = obj.filename;
    value.filePath = obj.filePath;
    console.log(abc);}, abc);


// function updateFile (filename, filePath) {
//     console.log("Updating " + filename + " file...");
//     setTimeout(()=> {
//         console.log("Finished updating " + filename);
//     },200)
// }
//
// function uploadFiles (filename, filePath) {
//     console.log("Uploading " + filename + " file...");
//     setTimeout(()=> {
//         console.log("Finished uploading " + filename);
//     },1200);
// }
//
// const p1 = new Promise((resolve, reject) => {
//     console.log("start")
//     resolve ({
//         filename: "abc",
//         filePath: "path xyz",
//     })
// })
//
// let a = p1.then((value) => {
//     let temp = downloadFiles(value.filename, value.filePath);
//     return temp;
// })
//
// console.log(a)