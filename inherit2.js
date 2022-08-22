'use strict';

class person {
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    greet(){
        console.log('Hello, '+this.firstname+' '+this.lastname) 
    }
}



var person1 = new person('Ravi','Kumar')
person1.greet();