
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

*/

import open from "open";
import fetch from "node-fetch";

//open("www.google.com",{app:{name: 'google chrome', arguments: ['--incognito']}}) /// open takes website url
await open('https://youtube.com', {app: {name: 'brave'}});
