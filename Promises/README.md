# Exercise - Promise

Write a promise. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject. 
Then manage the promise with then and catch in case of any reject.

# Exercise - Promise Chaining

Write a first promise that takes as parameter the variable `isLogged` . If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error. 
Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

# Exercise - Promise Errors

Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally method.
