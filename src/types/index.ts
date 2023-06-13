export interface IUser {
  username: string
  uid: string
}

export interface IUserProfile {
  userUid: string
  address: string
  birthdate: string
}

export interface IMail {
  from: string
  to: string
  subject: string
  text: string
}

export interface IMailRecord {
  name: string
  address: string
  wish: string
}
