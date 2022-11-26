const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
    };

class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    static fromObject(obj){
        const personObj = new Person(obj.firstName, obj.lastName)
        return personObj
      }

}

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
  