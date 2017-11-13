const promise = new Promise((resolve, reject) => {
    resolve('this is my resolved data');
    // reject('Something went wrong');
});

// .then callback function runs if promise was resolved, 
// .catch callback function runs if promise was rejected,

promise.then((data) => {
    console.log(data);
    return 'some data';     // by returning data, we can pass it along
}).then((someData) => {
    console.log(someData)  // logs 'some data'
}).catch((error) => {
    console.log('error:', error)
});
