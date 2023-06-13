import userService from './userService'
import validationService from './validationService'

const usersResp = {
  data:[
    {
      "username": "charlie.brown",
      "uid": "730b0412-72c7-11e9-a923-1681be663d3e"
    },
    {
      "username": "james.bond",
      "uid": "730b06a6-72c7-11e9-a923-1681be663d3e"
    },
    {
      "username": "bugs.bunny",
      "uid": "730b0804-72c7-11e9-a923-1681be663d3e"
    }
  ]
}

describe('validationService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('checkIfUserExists', () => {
    it('should return the user object if user exists', async () => {
      const mockUsers = usersResp
      userService.fetchUsers = jest.fn().mockResolvedValue(mockUsers.data)

      const user = await validationService.checkIfUserExists('james.bond')

      expect(user.username).toEqual('james.bond')
    })

    it('should return null if user does not exist', async () => {
      const mockUsers = usersResp.data
      userService.fetchUsers = jest.fn().mockResolvedValue(mockUsers)

      const user = await validationService.checkIfUserExists('3')
      var res = false
      if(user) res = true
      expect(false).toEqual(res)
    })
  })

  describe('calculateAge', () => {
    it('should calculate the age correctly', async () => {
      const birthDateString = '1990/01/01'

      const age = await validationService.calculateAge(birthDateString)

      expect(age).toBe(33)
    })
  })
})
