import dotenv from "dotenv"
dotenv.config()

import connectionDB from "./db/index.js"
import app from "./app.js"

const PORT = process.env.PORT || 8001

connectionDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port no: ${PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Error!: ${err}`);
})