const student = { name:'Rabi', marks: 30}
const friends = ['moyna', 'tiya', 'goyna']
const tax = 5000;
// defolt parameter
function add(num1, num2 = 0) {
    
}

// templat string
 const dynamicTex = `My Tax: ${tax} and marks ${student.marks*3} student: ${student.name} and has friends: ${friends[0]}`
//console.log (dynamicTex);

const friend = ['zabet', 'pabel', 'nobel', 'karim'] ;

const nameLengths =  friend.map(name => name[0])

//console.log(nameLengths)

const numbers = [1, 5, 16, 45, 2, 7]

//const greaterThan10 = numbers.filter(num => num % 2 == 0)


//const evenNumbers = numbers.filter(num => num % 2 == 0)

//console.log (evenNumbers);

let sum = 0;
for(const num of numbers){
    sum = sum + num 
}

//console.log (sum)

class Player{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
        //console.log('calling the back', name)

    }
}

const player = new Player('Tom', 33)
//console.log(player)
 



























































































