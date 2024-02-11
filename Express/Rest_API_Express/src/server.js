import express from "express"; 
import morgan from "morgan"; // it's like middleware
import {json,urlencoded} from "body-parser";// it's also a middleware

/*
it's ES6 Module either we can make server.js to server.mjs or we can
can make type in json file as "module" 
*/
const app=express(); // express object

app.use(morgan('dev')); 
//we'll define 2 routes "get route" and "post route" 

//first parameter will be route  and after it will give callback (what's the request on route and what's the response on route)
app.get('/',(req,res) => {
      //res.send("Hello world");
      console.log(req.body);
      res.send({message: 'OK'}); // json object

});
app.post('/',(req,res) => {
      //res.send("Hello world");
      console.log(req.body);
      res.send({message: 'OK Post'}); // json object

});
// to read this we need middleware too
/*


*/

export const start=() => {
    app.listen(3000, () =>{
        console.log("Server started at 3000");
    })
}