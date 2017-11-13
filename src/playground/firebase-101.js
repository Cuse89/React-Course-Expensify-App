import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDbe-idJ4K46CGSGvt9XCd1hotw6jGoIcI",
    authDomain: "marcus-guthrie-expensify.firebaseapp.com",
    databaseURL: "https://marcus-guthrie-expensify.firebaseio.com",
    projectId: "marcus-guthrie-expensify",
    storageBucket: "marcus-guthrie-expensify.appspot.com",
    messagingSenderId: "450310907207"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//     name: 'Marcus Guthrie',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Web developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Halifax',
//         country: 'UK'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: '9',
//     'job/company': 'Amazon',
//     'location/city': 'London'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('Removed')
// }).catch((e) => {
//     console.log('Remove failed', e)
// });

/////////////////// database.ref('isSingle').set(null) is equivalent to remove. Remove is easier to read though

// Fetching data from database, can specify single values in ref argument
// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }).catch((e) => {
//     console.log('Error fetching data', e)
// });

///////////// Subscribe to server to notify us of any changes ///////////////

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`)
// });

// ////////////// Unsubscribe from server to stop notifying /////////////////

// database.ref().off();

////////// Add to a list to the database (Firebase doesnt use arrays) /////////

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'ReactJs'
// });
// // can add another to the list by referring to 'notes'

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'AngularJs'
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'January rent for the apartment',
//     amount: 29500,
//     createdAt: 123456
// });
// database.ref('expenses').push({
//     description: 'Food shopping',
//     note: 'Tesco small shopping',
//     amount: 950,
//     createdAt: 321432
// });
// database.ref('expenses').push({
//     description: 'Gym membership',
//     note: 'Monthly gym membership',
//     amount: 1500,
//     createdAt: 654863
// });

//////// Subscribe to database for any changes and push them into an array //////

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });

////// Subscribe to database, if any of the expenses are removed /////

// database.ref('expenses').on('child_removed', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val())
// });

///// Subscribe to database, if any of the expenses are changed /////

// database.ref('expenses').on('child_changed', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val())
// });

// ///// Subscribe to database, if any expenses are added (also gets called for existing children)

// database.ref('expenses').on('child_added', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val())
// });