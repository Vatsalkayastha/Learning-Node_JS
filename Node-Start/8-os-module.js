const { log } = require('console');
const os =  require('os')

// info about the user

const user = os.userInfo();
console.log(user);

// method returns the system runtime in secs

console.log(`The system uptime is ${os.uptime()} seconds.`);

const curos = { 
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(curos);