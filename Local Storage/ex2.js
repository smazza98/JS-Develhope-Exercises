const user = {
    id: 1,
    name: "John",
    age: 25,
};

function getSavedUser() {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    console.log(savedUser);
}

getSavedUser();