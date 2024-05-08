const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000; // Consistent port with the frontend request

app.use(cors()); // Enable CORS for all domains

app.get('/api/repositories', async (req, res) => {
    const count = parseInt(req.query.count) || 10; // Ensure count is an integer
    try {
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=created:>2019-01-01&sort=stars&order=desc&per_page=${count}`);
        res.json(data.items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
