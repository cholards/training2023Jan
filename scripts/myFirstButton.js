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


let myName = 'Kolade';
let sureName = 'Adelaiye';

myName.length !== sureName.length ? console.log('washeyray!!!') : console.log('O por ju ju ju!!!');


let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}



isRaining = false
if (isRaining) {
    console.log('You need a rain coat.')
} else {
    console.log('No need for a rain coat.')
}