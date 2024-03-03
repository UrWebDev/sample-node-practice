const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./ccontent/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./ccontent/sec.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }

        const second = result
        writeFile('./ccontent/result-async.txt',
        `Here is the result ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')
        }
    )
    })
})
console.log('starting next task')