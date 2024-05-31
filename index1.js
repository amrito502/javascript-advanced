// spread && Rest operator
const classTen = {
    classTeacher: "Mr.X",
    student: 67,
    goodAt: {
        math: 20,
        english: 10,
        science: 17,
        others: 20
    }
}
const teacherObj = {
    classTeacher: "Mr. Y",
    institute: "govt. school"
}
const details = {...teacherObj,...classTen}
// console.log(details)



// let array = ["math", "science", "ict", "english","bangla"]
// let newArr = [...array]
// array.push("school")
// console.log(newArr)
// console.log(array);

// const [first, second, ...rest] = array
// console.log(first, second, )
// console.log(rest)



function sumOfNum(...numbers){
    return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(sumOfNum(2,3,5,6));