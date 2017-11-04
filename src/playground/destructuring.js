// ES6 Object destructuring

const person = {
    name: 'Marcus',
    age: '28',
    location: {
        city: 'Halifax',
        temp: 12
    }
};


const {name, age} = person; // is the equivalent of:
// const name = person.name;
// const age = person.age;
console.log(`${name} is ${age}`);

// we can set the default value too
const {city = 'Anonymous location', temp} = person.location; // means we can write
console.log(`In ${city} the temperature is ${temp}`); // rather than
console.log(`In ${person.location.city} the temperature is ${person.location.temp}`);

// we can also change the variable name(if we didnt have access to data structure)(temp variable is now name temperature)
const {temp: temperature} = person.location;
console.log(`The temperature is ${temperature}`)

// challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['29 Savile Park Road', 'Halifax', 'West Yorkshire', 'HX1 2EN'];

const [ , town = 'town default', county, postCode] = address;
// you can leave blanks like i have done above (left street out)
console.log(`You are in ${town}, ${county}`);

const item = ['coffee', '€2.00', '€2.50', '€2.75'];
const [drink, , mediumPrice] = item

console.log('A medium coffee costs €2.50');
console.log(`A medium ${drink} costs ${mediumPrice}`);