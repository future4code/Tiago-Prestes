import app from "./app"
import createUser from "./endpoints/createUser"
import getAllUser from "./endpoints/getAllUsers"

app.post("/user", createUser)
app.get("/user", getAllUser)

