import express from "express"; 
import morgan from "morgan"; // it's like middleware
import {json,urlencoded} from "body-parser";// it's also a middleware

/*
it's ES6 Module either we can make server.js to server.mjs or we can
can make type in json file as "module" 
*/
const app=express(); // express object
const router = express.Router();// Express router

app.use(morgan('dev')); 
app.use(json());
app.use(urlencoded({extended: true}));

const customLonger = (req,res,next) =>{
    console.log("Logger incoming");
    console.log(req.body)
    next();
}

app.use('/api/v1',router);
//we'll define 2 routes "get route" and "post route" 

//first parameter will be route  and after it will give callback (what's the request on route and what's the response on route)
app.get('/',[customLonger,customLonger],(req,res) => {
      //res.send("Hello world");
      console.log(req.body);
      res.send({message: 'OK GET'}); // json object
});

app.post('/',customLonger,(req,res) => {
      //res.send("Hello world");
      console.log(req.body);
      res.send({message: 'OK Post'}); // json object
});


// app.get('/',[customLonger,customLonger],(req,res) => {
//     //res.send("Hello world");
//     console.log(req.body);
//     res.send({message: 'OK GET'}); // json object
// });

// app.post('/',customLonger,(req,res) => {
//     //res.send("Hello world");
//     console.log(req.body);
//     res.send({message: 'OK Post'}); // json object
// });

// router.get('/post',(req,res) => {
//     res.send({message: 'Router OK'}); // json object
// });

// router.post('/post',(req,res) => {
//     res.send({message: 'OK'}); // json object
// });

router
    .route('/post')
    .get((req, res) => { //http://localhost:3000/api/v1/get and select post
        res.send({ message: "Router OK GET"});
    })
    .post((req, res) => { //http://localhost:3000/api/v1/post ans select post
        res.send({ message: "Router OK POST"});
    });

router
    .route('/post/:id') // url mein variable quantity colon(:) se
    .put((req, res) => { //http://localhost:3000/api/v1/post/2 and select put
        console.log(req.params)
        res.send({ message: "Router OK put"});
    })
    .patch((req, res) => { 
        res.send({ message: "Router OK patch"});
    })
    .delete((req, res) => {
        res.send({ message: "Router OK delete"});
    });


/*
**url mein se kuch nikalan
1. URL params
2. query params
*/

// to read this we need middleware too
/*


*/

export const start=() => {
    app.listen(3000, () =>{
        console.log("Server started at 3000");
    })
}

