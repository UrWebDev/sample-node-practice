const path = require('path')

console.log(path.sep)

const filePath = path.join('./ccontent,', 'subFolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'./ccontent,', 'subFolder', 'test.txt')
console.log(absolute)