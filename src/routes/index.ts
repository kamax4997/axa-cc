import { Router, Request, Response } from 'express'
import * as path from 'path'
import { postWish } from '../controllers/rootController'

const rootRouter = Router()

rootRouter.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

rootRouter.get('/sent', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/sent.html'));
})

rootRouter.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/error.html'));
})

rootRouter.post('/', postWish)

export default rootRouter
