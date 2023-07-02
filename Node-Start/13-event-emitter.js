const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data received`);
})
customEmitter.on('response',()=>{
    console.log(`Some other logic here.`);
})

customEmitter.emit('response')

