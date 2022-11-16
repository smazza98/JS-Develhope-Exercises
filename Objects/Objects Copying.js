const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };

  /**When an object variable is copied, the reference is copied, but the object itself is not duplicated. */
  
  // const person2 = person1;
  
  /*Doing so, there’s still one object, but now with two variables that reference it.
  We can use either variable to access the object and modify its contents... */
  
  // person2.firstName = "Simon";

  // The proper way to do it would be to copy values from the provided object to a new object, like so...

  const person2 = {...person1}; 
  person2.firstName = "Simon";
  
  console.log(person1);
  console.log(person2);
