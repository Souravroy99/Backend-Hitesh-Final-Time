import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"

const app = express()

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("/public"))
app.use(cookieParser())


// Routes
app.use("/api/v1/users", userRouter)

export default app