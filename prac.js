console.log("hello");
//var args=console.log(process.argv.splice(2));// argv:-array of arguments
// js also follows posic sysytem as c,c++
var args=process.argv.splice(2);
console.log(args[0]+" "+args[1]);
