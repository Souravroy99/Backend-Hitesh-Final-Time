import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"

const app = express()

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            _id: 1,
            title: "Who is the best",
            content: "I am the best"
        },
        {
            _id: 2,
            title: "Who is the best",
            content: "I will work like giant"
        }
    ]

    res.status(200).json(jokes)
})

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`Server is running at port no: ${PORT}`);
})