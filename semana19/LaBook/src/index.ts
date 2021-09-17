import app from "./app"
import createUser from "./endpoints/createUser"
import getAllUser from "./endpoints/getUserById"

app.post("/user", createUser)
app.get("/user", getAllUser)

