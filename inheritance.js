class TeamMember{
    name;
   
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;

    }

}

class Supprot extends  TeamMember{
    groupSupportTime;
    designation = 'Support web Dev';
    constructor(name, address, time){
        super( name, address)
        this.groupSupportTime = time;
    }

    startSession(){
        console.log(this.name, 'start a support session');
    } 
}

class StudentCare extends TeamMember{
    designation = 'Care web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student)
    }
}



// const alia = new StudentCare('Alia Bhatt', 'Mumbai');
// console.log(alia);

class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Neptune App dev'
    constructor(name,address,editor){
        super(name,address);
        this.codeEditor = editor;

    }
    
    releaseApp(version){
        console.log(this.name, 'release app version',version )
    }
}
const aamir = new Supprot('Amir khan', 'BD',11);
const salman = new Supprot('Solaiman khan','Dubai',4);
const sharuk = new Supprot('SRK khan','Dubai',11);
const akshay = new Supprot('Akshay Kumar','Dubai');

 const alia = new StudentCare('Alia Bhatt', 'Mumbai');
 const ash = new NeptuneDev('Ash', 'Mumbai','Android studio' );
 ash.releaseApp('1.4.5');
console.log(ash.name);
//  console.log(ash);
// console.log(alia);
// console.log(aamir);
// console.log(salman);