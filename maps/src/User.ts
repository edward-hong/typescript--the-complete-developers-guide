import faker from 'faker'

class User {
  constructor() {}

  name: string
  location: {
    lat: number
    lng: number
  }
}
