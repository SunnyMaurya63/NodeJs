/*

JavaScript is an interpreted language and its source code needs to be fed to some interpreter to run. 
If you want to run a JavaScript file using Node.js,you normally run this command:

* If you want to run a JavaScript file using Node.js, you normally run this command:
    $ node yourfile.js
-By typing the name of the interpreter (node), you are explicitly telling the shell how to run your script.


* But that knowledge can be put inside the script itself so it can be run directly as if it was a binary:
    $ ./yourfile.js 
  -This will work only if you have execution permission on that file.  


*/

//---------------------------Shebang --------------------------------

/*

Shebang or hashbang (#!) is the first line of the file which tells the OS which interpreter to use. It typically looks like this:
  #!/usr/bin/env (env mein node likhenge)

  Node.js will happily ignore this as a comment only if it is the very first line of the file 
  (it won’t work even if there’s an empty line or //comment line before it). 
  Browsers ignore it too (Chrome 74+, FF 67+).

Most people have a Node.js binary or symlink sitting at /usr/bin/node. 
If Node.js is not at /usr/bin/node, the OS will complain. 
For example bash would say bad interpreter: No such file or directory script won't execute. 
But is there a way to tell the OS to run the script with Node.js no matter

*/
 