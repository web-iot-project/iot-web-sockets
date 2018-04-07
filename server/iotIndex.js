const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const http = require("http")
const socketIo = require("socket.io")
const app = express();
const server = http.createServer(app)
const io = socketIo(server)


const port = 3456
////////////////////// HI MATT!!! I moved the raspberry pi's IOT info to it's own repository, hit me up if you have any questions. 
// I'm still moving forward with this project though. Just a dfferent way of organizing the project.
app.use(cors())
app.use(bodyParser.json())

let interval;
io.on("connection", socket => {
    console.log("hi")
    if (interval) {
        clearInterval(interval);
      }
  intervalId = setInterval(() => getApiAndEmit(socket), 500)

  socket.on("disconnect", () => {
    console.log("Client disconnected")
    clearInterval(intervalId)
  })
})



const getApiAndEmit = async socket => {
  try {
    const lightSend = lightOn
    socket.emit("FromServer", lightSend)
    // console.log(sd1obj)
  } catch (error) {
    console.error(`Error: ${error.code}`)
  }
}


let lightOn = false;

app.post('/api/forward', (req, res)=>{
  const {button} = req.query
if (button.toLowerCase() === 'w' || button.toLowerCase() === 'a' || button.toLowerCase() === 'd'){
  lightOn = req.query.button.toLowerCase();
  res.status(200).json('Nothing')
  console.log("turn on")
}
})

app.get('/api/stop', (req, res) => {
  lightOn = false
  res.status(200).json('Nothing')
  console.log("turn off")
})





















server.listen(port, () => console.log(`Listening on port ${port}`))

// app.listen(port, ()=> console.log(`Listening on port: ${port}`))


