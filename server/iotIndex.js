const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')



const port = 3456
////////////////////// HI MATT!!! I moved the raspberry pi's IOT info to it's own repository, hit me up if you have any questions. 
// I'm still moving forward with this project though. Just a dfferent way of organizing the project.


const app = express();
app.use(cors())
app.use(bodyParser(json()))




app.listen(port, ()=> `Listening on port: ${port}`)


