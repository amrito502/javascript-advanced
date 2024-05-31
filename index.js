
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

const {classTeacher : teacher, student, goodAt : {math, english}} = classTen

// const teacher = classTen.classTeacher
// const students = classTen.student
// console.log(math, english);




let array = ["math", "science", "ict", "english", ["first","second"], "bangla"]
// const [first, second, , , h] = array
// console.log(h);


// array of usecase

function individualNum(option){
    // let math = option.math
    // let english = option.english
    let {math, english} = option
    return [math + english, math - english]
}

const result = individualNum({math: 82, english: 60})
const [sum, much] = result
console.log(sum, much)