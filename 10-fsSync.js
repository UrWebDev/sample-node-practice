const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./ccontent/first.txt','utf8')
const second = readFileSync('./ccontent/sec.txt','utf8')

console.log(first,second)


writeFileSync('./ccontent/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}
);
console.log('done with this task')
console.log('starting the next one')