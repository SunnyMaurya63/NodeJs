const add=(num1 ,num2)=>{
       return num1+num2;
}

const sub=(num1,num2)=>{
    return num1-num2;
}
// console.log(add(2,1));
// module.exports =add;
//if we have to send sub also
// module.exports ={add,sub}; //we wrapped it into object
module.exports ={addition:add,sub}; //we changed the add key to addition


