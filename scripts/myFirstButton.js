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
// let adelaiyeFamily = ['iyabo', 'tunne', 'abey', 'nike', 'yemi', 'kola'];
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 999]
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    FunString: function() {
        return `${this.city} is the coolest place to be`
    },
    'phone number': '+3584545454545'
}

person.location = 'Lagos';
// person.skills.push('Multimedia, Public Relations, Logistics');

person.setSring = function() {

    let withOutLast = this.skills.pop(-1)

    return `${this.firstName} is the one that teaches us ${this.skills} and ${withOutLast} `
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
console.log(person.FunString());
console.log(person.setSring());