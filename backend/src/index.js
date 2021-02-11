import dotenv from "dotenv"
import app from "./app"
import mongooseConnection from "./database"

/* Config Vars */
dotenv.config()

const main = async () => {
  await app.listen(app.get(`port`))
  console.log(`server se escucha en el puerto ${app.get("port")}`)
}

main()
