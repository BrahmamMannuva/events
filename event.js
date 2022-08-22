var obj = {
    greet : 'Hello'
}
console.log(obj.greet)
console.log(obj['greet'])
var proper = 'greet'
console.log(obj[proper])

var Arr = []

Arr.push(function(){
    console.log('Hello World 1')
})

Arr.push(function(){
    console.log('Hello World 2')
})

Arr.forEach((item)=>{
    item()
})









/*const express = require('express')
const EventEmitter = require('events')
const events = new EventEmitter()
const app = express()
app.get('/',(req,res)=>{
    console.log('event emitter')
    
})*/