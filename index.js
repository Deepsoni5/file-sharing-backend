import express from 'express';
import cors from 'cors'
import router from './routes/routes.js';
import dbConnection from './database/db.js';

const app = express();

app.use(cors())
const PORT = 8000;

dbConnection();
app.use("/", router)
app.listen(PORT, (req, res) => {
    console.log(`server is running at ${PORT}`)
})

