//built in modules
const os = require('os')

//info abt current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime().toFixed(3)} seconds`)

const currentOS = {
    name: os.type().toLocaleUpperCase(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)