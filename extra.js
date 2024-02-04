/*

console.log 
*adds a line-break character at the end of the line (\n).
*Using console.log for a variable shows a lot of unreadable characters.
*It takes any JavaScript data type.
*We don’t need the break line here because it was already formatted.
*It's more efficient than process.stdout.write 

*/

/*

process.stdout.write 
*doesn't add a new line while console.log does, useful for printing patterns.
*We can not write more than one string.
*It only takes strings as arguments
*If we don’t put the break line at the end we will get a weird character after our string.

*/

console.log("hi");
process.stdout.write("hi ");
process.stdout.write("Hello World\n"); 
console.log("end");


console.error("Error");
process.stderr.write("Error ")


