import { IMailRecord } from '../types'

const fakeDB: IMailRecord[] = []

const createMail = (mail: IMailRecord) => {
  fakeDB.push(mail)
}

const getMails = (): IMailRecord[] => {
  return fakeDB
}

const deleteMails = () => {
  return fakeDB.length = 0
}

export default {
  createMail,
  getMails,
  deleteMails
}
