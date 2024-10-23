function downloadFiles (filename, filePath) {
    console.log("Downloading " + filename + " file...");
    setTimeout(() => {
        console.log("Finished downloading " + filename + " file...");
        return {
            filename: filename,
            filePath: filePath
        }
    }, 1000);
}

function updateFile (filename, filePath) {
    console.log("Updating " + filename + " file...");
    setTimeout(()=> {
        console.log("Finished updating " + filename);
    },200)
}

function uploadFiles (filename, filePath) {
    console.log("Uploading " + filename + " file...");
    setTimeout(()=> {
        console.log("Finished uploading " + filename);
    },1200);
}

const p1 = new Promise((resolve, reject) => {
    console.log("start")
    resolve ({
        filename: "abc",
        filePath: "path xyz",
    })
})

let a = p1.then((value) => {
    let temp = downloadFiles(value.filename, value.filePath);
    return temp;
})

console.log(a)