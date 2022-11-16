const printName = function() {
    let helloName = "Hello John";
    const inner = () => {setTimeout(() => {console.log(helloName)}, 1000); return helloName}
    return inner;
}

printName()()

