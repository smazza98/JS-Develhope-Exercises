
class Person {
    firstName = "";
    lastName = "";
    age = 0
    constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

/**
 * @param {string} newfirstName
 */
set firstName(newfirstName){
    this.firstName = newfirstName;
}

/**
 * @param {string} newlastName
 */
set lastName(newlastName){
    this.lastName = newlastName;
}

/**
 * @param {number} newAge
 */
set age(newAge){
    this.age = newAge;
}

get firstName(){
    return this.firstName;
}

get lastName(){
    return this.lastName;
}

get age(){
    return this.age;
}


get fullName(){
    return this.firstName + " " + this.lastName;
}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = 'Verdi';
console.log(person.fullName);