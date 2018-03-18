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
  intervalId = setInterval(() => getApiAndEmit(socket), 5000)

  socket.on("disconnect", () => {
    console.log("Client disconnected")
    clearInterval(intervalId)
  })
})

const lightOn = true;

const getApiAndEmit = async socket => {
  try {
    const lightSend = lightOn
    socket.emit("FromServer", lightSend)
    // console.log(sd1obj)
  } catch (error) {
    console.error(`Error: ${error.code}`)
  }
}


























server.listen(port, () => console.log(`Listening on port ${port}`))

// app.listen(port, ()=> console.log(`Listening on port: ${port}`))


