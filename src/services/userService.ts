import axios from 'axios'
import config from '../config'
import { IUserProfile } from '../types'

const fetchUsers = async (): Promise<any> => {
  try {
    const response = await axios.get(config.apiBaseUrl + '/users.json')
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching user data')
  }
}

const fetchUserProfiles = async () => {
  try {
    const response = await axios.get(config.apiBaseUrl + '/userProfiles.json')
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching user profile data')
  }
}

const getUserProfile = async (uid: string) => {
  let userProfiles = await fetchUserProfiles()
  return userProfiles.find((profile: IUserProfile) => profile.userUid === uid)
}

export default {
  fetchUsers,
  fetchUserProfiles,
  getUserProfile
}
