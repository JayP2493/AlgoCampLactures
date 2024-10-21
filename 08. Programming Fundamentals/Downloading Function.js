function download (fun,url) {
    console.log("Started file downloading...");
    setTimeout(()=> {
        console.log("Downloading Done.")
        fun?.()},
        5000);
}

function writeFile (fun,fileName) {
    console.log("Writing File...");
    setTimeout(()=> {
        console.log("Writing File done")
        fun?.()}, 200)
}

function uploadFile (fun,uploadURL) {
    console.log("Uploading File...");
    setTimeout(()=> {
        console.log("Uploading File done");
        fun?.();
    }, 3000);
}

function processFile () {
    download(
        function () {
            writeFile(
                function () {
                    uploadFile(undefined,"abc")
                }, "xyz"
            )
        },
        "xyz"
    )
}

processFile();
