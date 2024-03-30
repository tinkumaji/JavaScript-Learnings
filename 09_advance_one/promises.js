const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log('Promise consumed');
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Aysnc task 2 complete');
        resolve();
    }, 1000);
})
.then(function () {
    console.log('Aysnc 2 Promise consumed');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({username: "Tinku", email : "tinkumaji02@gmail.com"});
    }, 1000);
})
.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({username: "Tinku", email: "tinkumaji02@gmail.com"});
        } else {
            reject('ERROR: Something went wrong!');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('The promise is either resolved or rejected'));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({username: "Tinku", email: "tinkumaji02@gmail.com"});
        } else {
            reject('ERROR: Something went wrong!');
        }
    }, 1000);
});

async function consumePromiseFive () {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
consumePromiseFive();

async function getAllUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('fetch worked'));

// promise.all
// yes this is also available. I have to read about this..
