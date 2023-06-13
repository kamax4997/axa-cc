import * as cors from 'cors'
import * as express from 'express'
import helmet from 'helmet'
import * as morgan from 'morgan'
import config from './config'
import errorHandler from './middleware/errorHandler'
import fourOhFour from './middleware/fourOhFour'
import rootRouter from './routes'
import emailService from './services/emailService'

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
  origin: config.clientOrigins[config.nodeEnv]
}))
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(morgan('tiny'))

// Apply routes before error handling
app.use('/', rootRouter)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

setInterval(emailService.sendEmail, 1000 * 15)

export default app
