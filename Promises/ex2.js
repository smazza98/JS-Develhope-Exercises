const isLogged = true;

const promise1 = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user == true) {
                resolve(Math.random());
            } else {
                reject("Not logged");
            }
        },
            1000)
    })

}

const promise2 = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject("number !> 0.5");
            }
        },
            2000);
    })
}

promise1(isLogged)
    .then((num) => {
        console.log(num);
        return num;
    })
    .then((num) => promise2(num))
    .then((obj) => console.log(obj))
    .catch((err) => console.error(err))