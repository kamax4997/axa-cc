import { IUser } from 'src/types'
import userService from './userService'

const checkIfUserExists = async (username: string) => {
  let users = await userService.fetchUsers()
  if (users != null && users.length > 0) {
    return users.find((u: IUser) => u.username == username)
  } else {
    return null
  }
}

const isUserUnderAge = async (user: IUser, ageLimit: number) => {
  const userProfile = await userService.getUserProfile(user.uid)
  const age = await calculateAge(userProfile.birthdate)
  if (age < ageLimit) {
    return true
  }
  
  return false
}

const calculateAge = async (userBirthDate: string) => {
  const today = new Date()
  const birthDate = new Date(userBirthDate)

  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  return age
}

export default {
  checkIfUserExists,
  isUserUnderAge,
  calculateAge
}
