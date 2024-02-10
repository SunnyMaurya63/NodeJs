
/*
how to run this file using package.json.
   *I have made serve with "node index.js",
   *and in terminal i will write "npm run serve"
*/
// console.log("hello world!!!!");
// import _ from  'lodash';
// console.log(_);


/*
Explanation of the Code:
Opening Local Files: The open module in Node.js is generally used to open local files on your system, not directly launch webpages.
node-fetch Usage: This code imports node-fetch, which can fetch content from websites, but it's not used to open the webpage in this context.

if you r using other version form that api then also it can give eroor write this commomnd in command line - *nvm use 16* (let's say 26)
*/

import open from "open";
import fetch from "node-fetch";




// Open YouTube in Brave browser
//await open('https://youtube.com', { app: { name: 'brave' } });

// Fetch data from a URL and set a User-Agent header
// use node version 16 for this (nvm use 16)
//const res_promise_state = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states"); 
//const res_promise_dist = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/9"); // 29 for rajasthan, 6 for delhi etc....  
const res_promise_date = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=140&date=02-07-2022"); // 29 for rajasthan, 6 for delhi etc....  


// ---------------------------- M-1 ------------------------------

     // *** for this remove await in front of fetch
// res_promise_state
//   .then(response => {
//     if (response.ok) {
//       return response.json(); // pending promise
//     } else {
//       throw new Error(`Failed to fetch data. Status: ${response.status}`);
//     }
//   })
//   .then(data => {
//     console.log(data);
//   })

//------------------------------- M-2 ----------------------------------------------------------------

const data= await res_promise_date.json();
console.log(data);
// const numberOfDistricts = data.districts.length;
// console.log(numberOfDistricts);

// data.sessions.forEach(element =>{
//       console.log(element.name,element.vaccine);
// })

//------------- task --------------------------

/*

*for to fetch data of all district of state
*for each state filter the centers which has vaccine of user choice
*filter each data point based on whether user wants free or paid vaccination'
*send an email to the user periodically

*/ 