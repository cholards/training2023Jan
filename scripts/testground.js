// function counctDown(x) {
//     if (x === 0) {
//         return
//     }
//     console.log(x)
//     counctDown(x - 1)
// }
// counctDown(20);

// function factorial(num) {
//     // The factorial of 5 = 5*4*3*2*1 
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }

// }

// console.log(factorial(5));

// function fibonacci(num) {
//     // sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//     // let num1 = 0
//     // let num2 = 1
//     // let sum
//     // let i = 0

//     // for (let i = 0; i < num; i++) {
//     //     sum = num1 + num2;
//     //     num1 = num2
//     //     num2 = sum
//     // }
//     // return num2;
// }

// Given a string str and two characters X and Y, the task is to write a recursive function to replace all occurrences of character X with character Y.
// Input: str = abacd, X = a, Y = x 
// Output: xbxcd

// Input: str = abacd, X = e, Y = y 
// Output: abacd


// console.log(myFirstRecursive(5))

// export function myFirstRecursive(num) {

//     if (num < 0) { return; }

//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * myFirstRecursive(num - 1);
//     }
// };


// export function fibonacciSequence(number) {
//     if (number === 1 || number === 0) { return 1 };

//     let current = fibonacciSequence(number - 1) + fibonacciSequence(number - 2)

//     return current
// }

// console.log(fibonacciSequence(5))

// let fMemNames = 'Adelaiye';


// class Car {
//     constructor(
//         make = 'BMW',
//         model = '3 Series',
//         color = 'Red',
//         prodYear = 2023,

//     ) {
//         this.make = make;
//         this.model = model;
//         this.color = color;
//         this.prodYear = prodYear;
//         this.features = []
//     }
//     fam = fMemNames;
//     get Summ() {
//         return `This ${this.fam}s' ${this.color} ${this.prodYear} ${this.make} ${this.model} is simply fantastic because it has the following features: ${this.features.join(', ')} `
//     }

//     set nuProdYear(prod) {
//         this.prodYear = prod;
//     }

//     set Carfeatures(feature) {
//         this.features.push(feature);

//     }

// }


// let myCar = new Car('Toyota', 'Auris', 'White')
// let mosunsCar = new Car('Landrover', 'Discovery', 'White', 2024)
// let modesirsCar = new Car()

// mosunsCar.nuProdYear = 2020;
// mosunsCar.Carfeatures = 'four tyres';
// mosunsCar.Carfeatures = 'steering';
// mosunsCar.Carfeatures = 'windscreen';



// console.log(myCar.Summ)
// console.log(mosunsCar.Summ)
// console.log(modesirsCar.Summ)



// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         this.score += score
//     }
//     set setSkill(skill) {
//         this.skills.push(skill)
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//             this.skills.length > 0 &&
//             this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` and ${this.skills[this.skills.length - 1]}`
//         let formattedSkills = skills ? `He knows ${skills}` : ''

//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//         return info
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// person2.setScore = 1
// person2.setSkill = 'Planning'
// person2.setSkill = 'Managing'
// person2.setSkill = 'Organizing'

// console.log(person1.getScore)
// console.log(person2.getScore)

// console.log(person1.getSkills)
// console.log(person2.getSkills)
// console.log(person3.getSkills)

// console.log(person1.getPersonInfo())
// console.log(person2.getPersonInfo())
// console.log(person3.getPersonInfo())

//console.log(localStorage.currentUser)


// let nuArr = ['kolade', 'mosunmola', 'modesire', 'momore', 'moje']
// let nuArrStr = JSON.stringify(nuArr, undefined, 2);


// //localStorage.setItem('famiily', nuArrStr);

// console.log(localStorage.getItem('famiily'))


// //Callback
// const doSomething = mosun => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         mosun('It did not go well', skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     return console.log(result)
// }

// // doSomething(callback)



// let myCall = kolee => {
//     setTimeout(() => {
//         let pramOne = "Kare lai!"
//         setTimeout(() => {
//             kolee(pramOne, "eji")
//         }, 2000);
//     }, 3000)
// };

// let myProm = (result, err) => {
//     if (result) {
//         return console.log(result)
//     } else {
//         console.log(`There wan an error ${err}`)
//     }
// };


// myCall(myProm)
//     //myProm(myCall)



// let modesire = async(grace) => {
//     setInterval(grace => {
//         console.log(Math.round(Math.random(5) * 99))
//     }, 2000)

// }
// let momore = await (modesire())






// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         for (const key in data) {
//             document.write(`${key}. <strong> ${data[key].name} </strong> - ${data[key].region} - ${data[key].population
//             }<br>`)
//         }
//         console.log(data)

//     })
//     .catch(error => console.error(error)) // handling error if something wrong happens


// Closures

// function outerFunction() {
//     let count = 0

//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }


// let keepCount = outerFunction()

// setInterval(() => {

//     console.log(keepCount())
// }, 1000)

// a function which generate random hexa colors
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

console.log(hexaColor())


// a function which shows date and time
const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

console.log(showDateTime())