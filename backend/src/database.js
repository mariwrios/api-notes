import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const URI = process.env.DB_HOST

const connect = mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.on("error", console.error.bind(console, "connection error:"))
connection.once("open", () => {
  console.log("Base de datos conectada")
})

export default connect
