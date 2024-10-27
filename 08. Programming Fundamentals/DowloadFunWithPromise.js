function downloadFiles (filename, filePath) {
    return new Promise((resolve, reject) => {
        console.log("Downloading " + filename + " file...");
        setTimeout(() => {
            console.log("Finished downloading " + filename + " file.");
            resolve ();
        }, 1000);
    })
}

function updateFile (filename, filePath) {
    return new Promise((resolve, reject) => {
        console.log("Updating " + filename + " file...");
        setTimeout(() => {
            console.log("Finished updating " + filename + " file.");
            resolve ();
        }, 1000);
    })
}

function uploadFiles (filename, filePath) {
    return new Promise((resolve, reject) => {
        console.log("Uploading " + filename + " file...");
        setTimeout(()=> {
            console.log("Finished uploading " + filename);
            resolve ();
        },1200);
    })
}

function seq (fileName, filePath) {
    downloadFiles(fileName, filePath)
        .then(() => {return updateFile(fileName, filePath)})
        .then(() => {return uploadFiles(fileName, filePath)});
}

// seq("abc.text","xyz.com")
let a = uploadFiles("xyz.text","abc.com")
console.log(a);