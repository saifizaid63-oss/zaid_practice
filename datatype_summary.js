// Primitive data types

// 7 types :  string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3    

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('1234')   
const anotherId = Symbol('1234')
console.log(id === anotherId)  // false



//const bigNumber = 1234567890123456789012345678901234567890n


// Reference data types (non-primitive data types)

// array, object literals, functions, dates, anything else

    const heros = ['shaktiman', 'naagraj', 'doga']
   let myObj = {
        name: 'zaid',   
        age: 22,
        isLoggedIn: false
    }


    const myFunction = function() {
       // console.log('hello world'  );
    }
        
    console.log(typeof heros)  
    