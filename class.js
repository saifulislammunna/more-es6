class Supprot {
    name;
    designation = 'Support web Dev';
    address = 'BD';
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;

    }
    startSession(){
        console.log(this.name, 'start a support session');
    } 
}

const aamir = new Supprot('Amir khan', 'BD');
const salman = new Supprot('Solaiman khan','Dubai');
const sharuk = new Supprot('SRK khan','Dubai');
const akshay = new Supprot('Akshay Kumar','Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir,salman,sharuk,akshay);
// console.log(aamir);
// console.log(salman);