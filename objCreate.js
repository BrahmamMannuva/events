var person = {
    firstname : '',
    lastname : '',
    greet : function() {
        return this.firstname + " " + this.lastname
    }    
}

var fname = Object.create(person);
fname.firstname = 'Venkata';
fname.lastname = 'Brahmam';

var ravi = Object.create(person);
ravi.firstname = 'Ravi';
ravi.lastname = 'Kumar';

console.log(fname.greet());
console.log(ravi.greet());