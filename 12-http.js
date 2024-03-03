//https request
const http = require('http')

const server = http.createServer((incomingReq,res) => {
    if(incomingReq.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(incomingReq.url ==='/about'){
        res.end('this is about page')
    }
    else{
        res.end(
            `
            <h1>Oopps!</h1>
            <p>we cant seem to fiind the page youre looking for</p>
            <a href='/'>back home</a> 
            `
        )
    }
})

server.listen(5000)

