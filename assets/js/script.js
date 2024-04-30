console.log("Running......");

// import { introduce } from "./interactions";

const name = "Anthony Mays";

const x = introduce(name);

console.log(x);
// const person = {
//     name: {
//         first: "Elyan",
//         last: "Kemble",
//     },
//     age: 32,
//     location: {
//         city: "Garland",
//         state: "Texas",
//         zip: 75040,
//     },
//     occupation: "Front-End Developer",
// };

// function introduce() {
//     console.log(
//         `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
//     );
// }

// introduce();

// person.introduce = introduce;

// person.introduce();

// class Animal {
//     constructor(eyes, legs, isAwake, isMoving) {
//         this.eyes = eyes;
//         this.legs = legs;
//         this.isAwake = isAwake;
//         this.isMoving = isMoving;
//         // return is not needed because the new object is returned by default
//     }
//     sleep() {
//         this.isAwake = false;
//     }
//     wake() {
//         this.isAwake = true;
//     }
//     sit() {
//         this.isMoving = false;
//     }
//     walk() {
//         this.isMoving = true;
//     }
//     speak(sound) {
//         console.log(sound);
//     }
//     toString(animal = "Animal") {
//         return `This ${animal} has ${this.eyes} eyes and ${
//             this.legs
//         } legs. It ${this.isAwake ? "is" : "is not"} awake, and ${
//             this.isMoving ? "is" : "is not"
//         } moving.`;
//     }
// }

// class Cat extends Animal {
//     constructor(fur, isAwake, isMoving) {
//         super(2, 4, isAwake, isMoving);
//         this.fur = fur;
//     }
//     speak() {
//         super.speak("Meow...");
//     }
//     toString() {
//         return super.toString("Cat");
//     }
// }

// class Dog extends Animal {
//     constructor(fur, isAwake, isMoving) {
//         super(2, 4, isAwake, isMoving);
//         this.fur = fur;
//     }
//     speak() {
//         super.speak("Woof!");
//     }
//     toString() {
//         return super.toString("Dog");
//     }
// }

// class Cow extends Animal {
//     constructor(hair, isAwake, isMoving) {
//         super(2, 4, isAwake, isMoving);
//         this.hair = hair;
//     }
//     speak() {
//         super.speak("Moo.");
//     }
//     toString() {
//         return super.toString("Cow");
//     }
// }

// class Calf extends Cow {
//     constructor() {}
// }

// class Human extends Animal {
//     constructor(hair, name, language, isAwake, isMoving) {
//         super(2, 2, isAwake, isMoving);
//         this.hair = hair;
//         this.name = name;
//         this.language = language;
//     }
// }

// const me = new Human("black", "Abe", "Natural Language", false, false);
// console.log(me);

// class Developer extends Human {
//     // coffeeLevel = 0;
//     location = {};
//     skills = [];
//     constructor(
//         hair,
//         name,
//         isAwake,
//         isMoving,
//         title,
//         salary,
//         team,
//         city,
//         state,
//         ...skills
//     ) {
//         super(hair, name, "Natural Language", isAwake, isMoving);
//         this.title = title;
//         this.salary = salary;
//         this.team = team;
//         this.coffeeLevel = 0;
//         this.location.city = city;
//         this.location.state = state;
//         this.skills = skills;
//     }
// }

// const dev1 = new Developer(
//     "HotPink",
//     "Max",
//     false,
//     true,
//     "Backend Developer",
//     90000,
//     "Dev Team",
//     "NYC",
//     "New York",
//     "html",
//     "js"
// );
// console.log(dev1);
