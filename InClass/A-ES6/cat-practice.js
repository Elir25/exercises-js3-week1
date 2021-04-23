
class Animal {
    constructor(name, age, weight, color = 'white', sex){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.sex = sex;
    }
    
    breathe(){
    }
    
    eat() {
    }
    
    run(destination){
    }
    
    sleep(hours = 8){
        console.log(`I am ${this.name} and do sleep ${hours} a day\n`);
    }
}

class Cat extends Animal {
    constructor(name, age, weight, color = 'white', sex, isNasty = false){
        super(name, age, weight, color, sex);
        this.isNasty = isNasty;
    }
    
    meow(){
        console.log('Meeeoooww');
    }
       
    sleep(){
        console.log(`I am ${this.name} and do sleep 12 hours a day\n`);
    }
}

class Dog extends Animal {
    constructor(name, age, weight, color = 'white', sex, bestFriend = 'Human'){
        super(name, age, weight, color, sex);
        this.bestFriend = bestFriend;
    }
    
    bark(){
        console.log('Woof woof!');
    }
    
    sleep(){
        console.log(`I am ${this.name} and do sleep 6 hours a day\n`);
    }
}

let oscar = new Cat('Oscar', 3, 7, 'brown', 'male');
let luna = new Cat('Luna', 2, 5, 'gray', 'female');
let mingau = new Cat('Mingau', 2, 5, 'male', true);

let cats = [oscar, luna, mingau];

// cats.forEach(cat => {
//     console.log(`The cat name is ${cat.name} and his color is ${cat.color}`);
//     cat.meow()
// });

let toby = new Dog('Toby', 3, 7, 'black', 'male');
let rex = new Dog('Rex', 4, 10, 'black & caramel', 'male');

let dogs = [toby, rex];

let louro = new Animal('Louro', 2, 0.5, 'green & yellow', 'male');

let animals = [louro, ...cats ,...dogs];

animals.forEach(animal => {
    console.log(`The animal name is ${animal.name} and his color is ${animal.color}\n`);
    animal.sleep();
    if(animal instanceof Cat) {
        animal.meow();
        console.log(`Am I nasty?: ${animal.isNasty}\n`);
    } else if(animal instanceof Dog) {
        animal.bark();
        console.log(`My best friend is ${animal.bestFriend}\n`);
    }
});