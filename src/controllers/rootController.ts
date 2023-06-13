import { NextFunction, Request, Response } from 'express'
import { fakeDBService, userService, validationService } from '../services'

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const postWish = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, wish } = req.body

    let user = await validationService.checkIfUserExists(username)

    if (!user) {
      return res.redirect('/error?msg=User is not registered!')
    }

    const userProfile = await userService.getUserProfile(user.uid)
    const isUserUnderAge = validationService.isUserUnderAge(user, 10)

    if (!isUserUnderAge) {
      return res.redirect('/error?msg=Sorry, you are over 10 years old.')
    }

    let wishMail = ''
    wishMail += '\n======== Start ========'
    wishMail += '\nName: ' + username
    wishMail += '\nAddress: ' + userProfile.address
    wishMail += '\nWish: ' + wish
    wishMail += '\n======== End ========='

    fakeDBService.createMail({
      name: username,
      address: userProfile.address,
      wish: wish
    })

    return res.redirect('/sent')
  } catch (error) {
    next(error)
    return res.status(500).send('Something went wrong!')
  }
}
