import { app } from "./app/app";

// change later
const PORT = 3000
const DOMAIN_HOST = 'localhost'
// change later

app.listen(PORT, (error) => {
    console.error(error ?? `App running in port: http://${DOMAIN_HOST}:${PORT}`)
})