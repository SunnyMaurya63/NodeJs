// **if we'll convert file name .js to .mjs then it will try to get an ES6 module

export const linearSearch = (arr, target) => {
    for (let element of arr) {
        if (element === target) {
            return true;
        }
    }
    return false;
}

export const binarySearch=(arr,target)=>{
    return true;
}

//console.log(linearSearch([1, 3, 5, 6, 8], 3));
