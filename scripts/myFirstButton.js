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
let AlphaRandom1 = Math.floor(Math.random() * 25);
let AlphaRandom2 = Math.floor(Math.random() * 25);
let AlphaRandom3 = Math.floor(Math.random() * 25);
let AlphaRandom4 = Math.floor(Math.random() * 25);
let numRandom1 = Math.floor(Math.random() * 77)
let numRandom2 = Math.floor(Math.random() * 90)
let numRandom3 = Math.floor(Math.random() * 99)
console.log(alphabets[AlphaRandom1] + '' + numRandom1 + '' + alphabets[AlphaRandom2] + '' + numRandom2 + '' + alphabets[AlphaRandom3] + '' + numRandom3);