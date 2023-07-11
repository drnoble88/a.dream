const PORT = 8000
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.get('/destination', (req, res) => {
    const Figname = 'Paris'
    const fetchData = {
        method: 'GET',
        url: `https://api.pexels.com/v1/search?query=${Figname}`,
        headers: {
            "Authorization": process.env.REACT_APP_API_KEY,
        },
    };

    axios.request(fetchData).then((response) => {
        res.json(response.data.photos[4].src.original)
    }).catch((error) => {
        console.error(error)
    })

}
)

app.get('/figurehistory', (req, res) => {
    const Figname = req.query.text
    const fetchData = {
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/historicalevents`,
        params: { text: Figname },
        headers: {
            "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
    };

    axios.request(fetchData).then((response) => {
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })

}
)

app.post('/inform', (req, res) => {
    async function postData() {
        
        const history2 = req.body.data.messages
        try {

            const url = 'https://api.openai.com/v1/chat/completions';  
            let data = {
                'model': "gpt-3.5-turbo",
                "messages":[{ "role": "user", "content": history2 }]
            };
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            };

            const response = await axios.post(url, data, { headers });

            res.json(response.data);


        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: 'An error occurred' });
        }

    }
    postData();
}
)


app.listen(8000, () => console.log(`server is running on port ${PORT}`))