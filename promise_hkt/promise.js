
//---------------- with the use of normal callback-----------------
/*

const fs = require('fs');

// my own asynchronous fnction 
function helper(cb){
    fs.readFile("input.txt", "utf-8" , function(err,data){
        cb(data);
    });
}

// callback function to call

function onDone(data){
     console.log(data);
}

helper(onDone);

*/



//---------------- with the use of promises-----------------

/*

const fs = require('fs');

console.log("start");

function helper() {
    console.log("inside function");
    return new Promise(function(resolve) {
        console.log("inside promise");
        fs.readFile("input.txt", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data);
            console.log("after resolve");
        });
    })
}

console.log("Afterfunction");

// callback function to call
function onDone(data) {
    console.log(data);
}
console.log("After onDone");
helper().then(onDone);
// or we can do 
// var a=helper();
// a.then(onDone);

console.log("end");


*/

//----------------------- promise Comparator ------------------------------
/*
console.log("start"); 

var d = new Promise(function (resolve) {
         setTimeout(function () {
            resolve("foo");
         })  
});

function callback(data) {
    console.log(d);
}
console.log(d);
d.then(callback);


console.log("end"); 
*/

//--------------------------- promise4 that immediately resolves ---------------------------------

/*

console.log("start"); 

let p= new Promise(function (resolve){
    console.log("hi there");
})
console.log("after p");
p.then(function(){
    console.log(p);
})

console.log("end"); 

*/

//-------------------------- Dummy Async function and promise -------

/*
console.log("start"); 

function sunnyAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

const value = sunnyAsyncFunction();
value.then(function(data){
    console.log(data);
})

console.log("end"); 
*/

//------------------------------- intimidating Async fnction and simple funvctio -----------

/*


//** intimidating Async fnction (with promise)

// function sunnyAsyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,2000)
//     });
//     return p;
// }

// const value =sunnyAsyncFunction();
// value.then(function(){
//     console.log("hi there");
// })

//** simple Async fnction(without promise)

// function sunnyAsyncFunction(callback){
//         setTimeout(callback,2000); 
// }

// sunnyAsyncFunction(function(){
//     console.log("hello!");
// });

*/


//------------------------- async and await ----------------------------------------------------------------

/*
console.log("start");

function sunnyAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        setTimeout(function(){
            resolve("hi there!")
        },3000)
    });
    return p;
}

async function main(){
    let value= await sunnyAsyncFunction();
    console.log(value);
    console.log("hi there1!");
}


console.log("before main");
main();
console.log("end");
*/