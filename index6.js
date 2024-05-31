// const map = new Map([
//     [1, "A"],
//     [2, "B"],
//     [3, "C"],
//     [4, "D"],
// ])

// map.clear()
// console.log(map);
// map.set(5, "E")
// map.delete(3)
// console.log(map.has(2));
// console.log(map.get(2));
// console.log(map.entries())
// map.forEach(value => console.log(value))

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// Object.entries(myObj).forEach(([key, value]) => console.log(key, value))

const myObj = [
    {
        id: 1,
        title: "title 1",
        desc: "desc 1"
    },
    {
        id: 2,
        title: "title 2",
        desc: "desc 2"
    },
    {
        id: 3,
        title: "title 3",
        desc: "desc 3"
    },
    {
        id: 4,
        title: "title 4",
        desc: "desc 4"
    },
]

// function findIndex(id){
//     return myObj.find(item => item.id === id)
// }

// console.log(findIndex(2));

const items = new Map([
    [1,{
        id: 1,
        title: "title 1",
        desc: "desc 1"
    }],
    [2,{
        id: 2,
        title: "title 2",
        desc: "desc 2"
    }],
    [3,{
        id: 3,
        title: "title 3",
        desc: "desc 3"
    }],
    [4,{
        id: 4,
        title: "title 4",
        desc: "desc 4"
    }],
])

console.log(items.get(2));