var EventEmitter = require('events');
var util = require('util');

function greetr(){
    this.greeting = 'Hello!'
}

util.inherits(greetr,EventEmitter)

greetr.prototype.greet = function(data){
    console.log(this.greeting+' : '+data)
    this.emit('greet',data)    
}

var greeter1 = new greetr()

greeter1.on('greet',function(data) {
    console.log('someone greeted! : '+data)
})

greeter1.greet('Tony');
