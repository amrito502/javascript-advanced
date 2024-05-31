
let firstName = "Amrito Bosu";
let institute = "Code ABC";
let greet = function() {
    console.log(`${firstName} make programming video for ${institute}`)
}

let playList = "playlist"

const myObject = {
    firstName,
    institute,
    greet() {
        console.log(`${firstName} make programming video for ${institute}`)
    }
}

myObject[playList] = "Advanced Javascript"

// console.log(Object.keys(myObject));
// console.log(Object.values(myObject));
// console.log(Object.entries(myObject));

console.log(myObject.hasOwnProperty("firstName"));
console.log(myObject.hasOwnProperty("firstNam"));