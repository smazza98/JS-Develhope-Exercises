const isLogged = true;

const promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            const num = Math.random()
            resolve(num)
        } else {
            reject(new Error("not logged"))
        }
    })
}

const promise2 = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
            resolve({ name: "John", age: 24 });
        } else {
            reject(new Error("number !> 0.5"));
        }
    })
}

promise1(isLogged)
    .then(promise2)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    .finally(() => console.log("working"))