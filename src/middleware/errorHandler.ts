import { NextFunction, Request, Response } from 'express'
import config from '../config'

/**
 * 500 response & log when errors are raised.
 *
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */

// eslint-disable-next-line no-unused-vars
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(500).json({ 
    message: config.nodeEnv === 'production' ?
      'unknown error' :
      `${err}`
  })
}

export default errorHandler