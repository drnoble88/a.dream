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
    const Figname = req.query
    const fetchData = {
        method: 'GET',
        url: `https://api.pexels.com/v1/search`,
        params: {query: Figname} ,
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


app.listen(8000, () => console.log(`server is running on port ${PORT}`))