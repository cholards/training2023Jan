console.log('JavaScript file is linked correctly');

const myFirstButton = () => {
    const buttonContent = ['bag', 'purse', 'shoes', 'computers', 'lessons', 'kola'];
    let randomButtonContent = Math.floor(Math.random() * buttonContent.length);
    console.log(buttonContent[randomButtonContent]);
    document.getElementById('content').innerText = buttonContent[randomButtonContent];

}

const pageItemList = () => {
    const listData = ['red', 'white', 'blue', 'purple', 'brown', 'green', 'orange', 'pink'];
    let pageItemList = document.getElementById('pageItemList');
    listData.forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        pageItemList.appendChild(li);
    })
}

// export function kola() {
//     return 'GREATEST';
// }



// LESSON Switch, case, break 
let adelaiyeFamily = ['iyabo', 'tunne', 'abey', 'nike', 'yemi', 'kola'];
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 999]
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     FunString: function() {
//         return `${this.city} is the coolest place to be`
//     },
//     'phone number': '+3584545454545'
// }

// person.nationality = 'Ethiopian'
// person.country = 'Finland'
// person.title = 'teacher'
// person.skills.push('Meteor')
// person.skills.push('SasS')
// person.isMarried = true

// person.getPersonInfo = function() {
//     let withOutLast = this.skills.pop(-1)
//     return `${this.getFullName()} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${this.skills} and ${withOutLast} `
// }

// // accessing values using .
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// // value can be accessed using square bracket and key name
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])
// console.log(person.FunString());
// console.log(person.getPersonInfo());


// console.log('Object Methods Lessons')

// const copyPerson = person.hasOwnProperty('title');
// console.log(copyPerson)


// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// users.Kola = {
//     email: 'kola@kola.com',
//     skills: ['PR', 'Multimedi', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node', 'Music'],
//     age: 90,
//     isLoggedIn: true,
//     points: 9000
// };

// Object.assign(users)

// //console.log(users['Alex'])

// let eachPerson = [Object.keys(users)];
// let objectOfScore = {};
// for (eachPerson in users) {
//     objectOfScore[eachPerson] = users[eachPerson].skills.length;
// }
// let namesArray = Object.keys(objectOfScore)
// let skillsArray = Object.values(objectOfScore)

// for (let i = 0; i < namesArray.length; i++) {
//     console.log(`${namesArray[i]} has ${skillsArray[i]} Skills,`)

//     if (skillsArray[i] === Math.max.apply(null, skillsArray)) {
//         console.log(`${namesArray[i]} has the highest score`)
//     }
// }

// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10))

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element) {
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum

// }
// console.log(sumArray(numbers))


// // Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10))


//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// let modifier = adelaiyeFamily.map((m, i, a) => m + ' ' + i);

// console.log(modifier);

// let myFilter = adelaiyeFamily.filter(name => !name.includes('i'));

// console.log(myFilter);


// // const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum)

// let seeIfNumbers = numbers.every(number => typeof number === 'number');

// console.log(seeIfNumbers)

// let findFunction = adelaiyeFamily.find(member => member.length == 4);
// console.log(findFunction)


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) => b === true)

// console.log(areSomeTrue) //true
// const areAllStr = names.some((name) => typeof name === 'number')
// console.log(areAllStr) // false

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
//     // console.log(numbers.sort((a, b) => a - b))



// let a = [1, 2, 3, 4, 5];
// let b = [2, 4, 6, 8, 10];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = a.filter(x => !B.has(x))

// // console.log(C);


// let gciRollCall = [
//     ['Kolade', 'Adelaiye'],
//     ['Idris', 'Busari'],
//     ['Abayomi', 'Ajayi'],
//     ['Biola', 'Yusuf']
// ]

// let gcioba = new Map(gciRollCall);

// gcioba.set('Adewole', 'Raji');

// for (const [eni, eji] of gcioba) {

//     console.log(`${eni} is the one with ${eji}`)

// }

// let numuArr = []

// for (let nomu in numbers) {
//     numuArr.push('Position' + nomu)

// }

// console.log([...numbers])

// //let [eni, egi, eta, erin, arun, afe] = adelaiyeFamily;




// const names2 = [undefined, 'Brook', 'David']
// let [
//     firstPerson = 'Asabeneh',
//     secondPerson,
//     thirdPerson,
//     fourthPerson = 'John'
// ] = names2

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)


// let [eni, egi, eta, ...greatnessIncrease] = adelaiyeFamily

// console.log(eni, egi, eta)
// let soroSoke = [egi, ...greatnessIncrease]
// console.log(soroSoke);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: undefined
// }
// let { width, height, area, perimeter = 60 } = rectangle

// console.log(width, height, area, perimeter) //20 10 200 60
//     //Let us modify the object:width to 30 and perimeter to 80



const person = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250,
        country: 'Finland',
        job: 'Instructor and Developer',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB',
            'Python',
            'D3.js'
        ],
        languages: ['Amharic', 'English', 'Suomi(Finnish)']
    }
    // Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo(person))