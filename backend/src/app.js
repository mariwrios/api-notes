import express from "express"
import notesRoute from "./components/notes/notesRoute"
import userRoute from "./components/user/userRoutes"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

// settings
app.set(`port`, process.env.APP_PORT || 4002)

//middleware
app.use(cors())
app.use(express.json())

//routes

app.use("/api/notes", notesRoute)

app.use("/api/users", userRoute)

export default app
