//Object Enhancements Exercise

//Same keys and values

function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}
//refactored
function createInstructor = (firstName, lastName) {
    return {
        firstName,
        lastName,
    }
}

//Computed property names

var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
//refactored
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods

var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function() {
        return this.firstName + " says bye!";
    }
}
//refactored
const instructor = {
    firstName: "Colt",
    sayHi() {
    return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//createAnimal function
//Write a function that generates an animal object. The function should accept 3 arguments:
//species: the species of animal ('cat', 'dog')
//verb: a string used to name a function ('bark', 'bleet')
//noise: a string to be printed when above function is called ('woof', 'baaa')
//Use one or more of the object enhancements we've covered

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: f}
d.bark() //"Wooof!"

const s = createAnimal("sheep", "bleet", "BAAAaaaa")
// {species: "sheep", bleet: f}
s.bleet() //"BAAAAaaaa"

const c = createAnimal("cat", "purr", "meow")
// {species: "cat", purr: f}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}


