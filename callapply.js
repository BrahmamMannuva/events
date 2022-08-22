var obj = {
    name : 'Krishna',
    greet : function(param){
        console.log(`Hello ${this.name}`)
    }
}
obj.greet()
obj.greet.call({name : 'Vamshee'})