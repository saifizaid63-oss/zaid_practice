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




    // +++++++++++++++++++++++++++++++++++++++++++++++++


    // stack vs heap memory there are two types of memory in js
       
    // steck memory : primitive data types are stored in stack memory
    // heap memory : non-primitive data types are stored in heap memory

    let myInstaname = 'zaidxsaifi'   // stored in stack memory 

    let anotherName = myInstaname   
    anotherName = "saifizaid"         // changing anotherName does not change myInstaname

    console.log(myInstaname);
    console.log(anotherName);


    let userOne = {
        email: "user@google.com",
        upi : "user@upi"
    }

    let userTwo = userOne
    userTwo.email = "zaid@gmail.com"

    console.log(userOne.email );
    console.log(userTwo.email  );
    

    
    
    
    
    
    