require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))
app.use(express.json());

const port = process.env.PORT || 5000
app.listen(port, () => {
    try {
        console.log(`Server is running at port: ${port}`);
    } catch (error) {
        console.error("Unable to start server: ", error)
        process.exit(1);
    }
})