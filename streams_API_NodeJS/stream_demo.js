const fs= require("fs");
const transformStream = require("stream");//one more Api in node js which can transform stream
const zlib=require("zlib");// to create zip


let zipper=zlib.createGzip();
let archiver=zlib.createGunzip(); 

let inputStream = fs.createReadStream(__dirname + "/input.txt");
let outputStream = process.stdout;
let targetStream = fs.createWriteStream(__dirname + "/output.txt");




let midStream = new transformStream.Transform({
    transform(chunk,enc,nextCB){
        this.push(chunk.toString().toUpperCase());
        //nextCB();
        setTimeout(nextCB,5000); // to see if it is processing in chunks or not
    }
});

// inputStream.pipe(outputStream); // piping mechanism,dumping also
inputStream.pipe(midStream).pipe(targetStream); // midstream ko output stream se connect.
//inputStream.pipe(midStream).pipe(outputStream).pipe(targetStream); // we can do this as outputStream is writtable stream

