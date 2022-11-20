const multiplyByTwo = (number) => {
    const inner = (xValue) => { 
        if (isNaN(xValue)) {
            xValue = 2;
        }
        const result = number * xValue;
        return result;
    }
    return inner;
}

console.log(multiplyByTwo(2)());