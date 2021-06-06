let fs = require('fs');
let faker = require('faker');
const { fake } = require('faker');

// let peoples = [];

// for (let i = 0; i < 10; i++) {
//     let people = {};

//     people.name = faker.name.findName();
//     people.email = faker.internet.email();
//     people.address = {
//         city: faker.address.city(),
//         country: faker.address.country(),
//         lat: faker.address.latitude(),
//         long: faker.address.longitude()
//     };

//     peoples.push(people);
// }

// // console.log(JSON.stringify(peoples));
// let json = JSON.stringify(peoples)
// fs.writeFile('demo.json', json, (err, dats) => {
//     console.log('File Created Successfully');
// })


var data = fs.readFileSync('demo.json').toString()
// console.log(data);

let peoples = JSON.parse(data)
console.log(peoples);

peoples.forEach(element => {
    console.log(element.name, element.email);
});



