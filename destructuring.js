const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '017175555555', address: 'Chandpur', dress: 'silver'};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, price,dress, id} = fish;

// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone);



const company = {name: 'GP', 
ceo: {id: 1, name: 'ajmol', food: 'fucka'},
web: {work: 'website development',
        employee: 22, 
        framework:'react', 
        tech: {first: 'html',
             second: 'css', 
             third: 'js'}}
};
// broad process
// const work = company.web.work;
// const framework = company.web.framework;

//shortcut process
const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;

console.log(work,framework,food);
