const number = 15;

const promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number)
    } else {
        reject(new Error("!> 10"))
    }
})

    .then((val) => console.log(val))
    .catch((err) => console.log(err))