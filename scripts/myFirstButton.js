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



const eightEmptyValues = Array(8)
console.log(eightEmptyValues);


for (let i = 0; i < eightEmptyValues.length; i++) {
    eightEmptyValues[i] = i;
}
console.log(eightEmptyValues);