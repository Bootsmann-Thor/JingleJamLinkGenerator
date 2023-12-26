// credit for crossplatform solution to Kanchu and others on stackoverflow https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript

function download(data, filename, type) {
    var file = new Blob([data], {type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        //document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            //document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}