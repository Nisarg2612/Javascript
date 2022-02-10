const http = require('http')
const url = require('url')

function addZero(i) {

    return (i < 10 ? '0': '') + i

}

function currenttime () {

    var date = new Date()

  return {

    year: addZero(date.getFullYear()),

    month: addZero(date.getMonth() + 1),

    date: addZero(date.getDate()),

    hour: addZero(date.getHours()),

    minute: addZero(date.getMinutes()),

    second: addZero(date.getSeconds())

  }

}


let server = http.createServer(function (req, res) {

  var parsedUrl = url.parse(req.url, true)

  // match req.url with the string /api/currenttime
  if (/^\/api\/currenttime/.test(req.url))

    var result = currenttime(parsedUrl)

    
  if (result) {

    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.end(JSON.stringify(result))

  } else {

    res.writeHead(404)

    res.end()

  }

})

server.listen(Number(process.argv[2]))