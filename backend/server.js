import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
const PORT = process.env.PORT || 5000
import dataFromUrlRoute from './routes/dataFromUrlRoute.js'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())

app.use('/api/test', dataFromUrlRoute)

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow))