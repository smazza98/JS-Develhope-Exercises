const repeatHello = (callback) => {
    const int = setInterval(callback, 1000)
    setTimeout(() => clearInterval(int), 5000)
}

repeatHello(() => console.log("hello"))

