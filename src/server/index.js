const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const mockAPIResponse = require('./mockAPI.js')

require('dotenv').config()

const PORT = 8081

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('dist'));
console.log(__dirname);

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/evaluate', async (req, res) => {
    console.log(req.body)
    const userURL = req.body.url;
    const apiURL = `${baseURL}${apiKey}&url=${userURL}&lang=auto`;
    const response = await axios.get(apiURL);
    res.send({
    score_tag: response.data.score_tag,
    subjectivity: response.data.subjectivity,
    confidence: response.data.confidence,
    irony: response.data.irony,
    agreement: response.data.agreement
    })
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

