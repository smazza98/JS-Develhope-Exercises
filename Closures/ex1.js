const printName = () => {
    const helloName = "Hello John";
    const inner = () => {return helloName;}
    return inner;
}

console.log(printName()())
