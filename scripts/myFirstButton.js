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

// LESSON Switch, case, break 
let adelaiyeFamily = ['iyabo', 'tunne', 'abey', 'nike', 'yemi', 'kola'];
// let userInput = prompt('Pls enter member name')

// switch (userInput) {
//     case 'kola':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case 'yemi':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case 'nike':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case 'abey':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case 'tunne':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case 'yabo':
//         console.log(userInput + "'s position is " + (adelaiyeFamily.indexOf(userInput) + 1));
//         break;
//     case null:
//         console.log("No data entered");
//         break;
//     case '':
//         console.log("No data entered");
//         break;
//     default:
//         console.log(userInput + "'s name is not in the family register")
// }


// // LESSON Arrays
// const eightEmptyValues = Array(8)
// console.log(eightEmptyValues);
// for (let i = 0; i < eightEmptyValues.length; i++) {
//     eightEmptyValues[i] = i;
// }
// console.log(eightEmptyValues);



// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 999]
//     //console.log(ages.sort());

// if (ages.length % 2 === 0) {
//     let halfLength = (ages.length / 2) - 1;
//     let firstValue = ages[halfLength];
//     let secondValue = ages[halfLength + 1];
//     let medianVal = (firstValue + secondValue) / 2
//     console.log(medianVal);
// } else if (ages.length % 2 > 0) {
//     let halfLength = (ages.length / 2) + 0.5;
//     let halfPoint = ages[halfLength] - 1;
//     let medianVal = (halfPoint) / 2
//     console.log(medianVal);
// } else {
//     console.log('CANNOT COMPUTE')
// }



let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let AlphaRandom1 = Math.floor(Math.random() * 25);
// let AlphaRandom2 = Math.floor(Math.random() * 25);
// let AlphaRandom3 = Math.floor(Math.random() * 25);
// let AlphaRandom4 = Math.floor(Math.random() * 25);
// let numRandom1 = Math.floor(Math.random() * 77)
// let numRandom2 = Math.floor(Math.random() * 90)
// let numRandom3 = Math.floor(Math.random() * 99)
// console.log(alphabets[AlphaRandom1] + '' + numRandom1 + '' + alphabets[AlphaRandom2] + '' + numRandom2 + '' + alphabets[AlphaRandom3] + '' + numRandom3);



//let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// let numArray = [];
// let countAssocArray = [];
// for (let i = 0; i < countries.length; i++) {
//     let ele1 = countries[i].toLocaleLowerCase();
//     let ele2 = countries[i].slice(0, 3);
//     let ele3 = countries[i].length;
//     let x = [ele1 + ', ' + ele2 + ', ' + ele3];
//     countAssocArray.push(x);
// }
// console.log(countAssocArray);


// let mySum = (...x) => {
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// }
// mySum(alphabets);


// let squaredNum = (function(n) {
//     return n * n
// })(10)
// console.log(squaredNum)

// const square = n => n * n;
// console.log(square(2));


// //scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
//     // Function scope
// function letsLearnScope() {
//     // console.log(a, b) // JavaScript 10, accessible
//     let value = false
//         // block scope
//     if (true) {
//         // we can access from the function and outside the function but 
//         // variables declared inside the if will not be accessed outside the if block
//         let a = 'Python'
//         let b = 20
//         let c = 30
//         let d = 40
//         value = !value
//             // console.log(a, b, c, value) // Python 20 30 true
//     }
//     // we can not access c because c's scope is only the if block
//     // console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
//     // console.log(a, b) // JavaScript 10, accessible