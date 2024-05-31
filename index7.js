// set in js

// let arr = [2,3,4,5]
// let set = new Set(arr)
// console.log(set.has(2))

// function removeDuplicate(arr){
//     let newArr = []

//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         if(!newArr.includes(element)){
//             newArr.push(element)
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicate([2,3,4,4,6,2]))


// set

function removeDuplicate(arr){
   let set = new Set(arr)
   return [...set]
}

console.log(removeDuplicate([2,3,4,4,6,2]))