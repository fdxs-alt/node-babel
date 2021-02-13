import express from 'express'
import pino from 'pino-http'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

const app = express()

app.use(pino())
app.use(helmet())
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
