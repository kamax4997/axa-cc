import { Request, Response } from 'express'

/**
 * JSON 404 response
 * @param {Request} req 
 * @param {Response} res
 */
const fourOhFour = (req: Request, res: Response) => {
  return res.status(404).json({message: 'Page not found'});
}

export default fourOhFour
