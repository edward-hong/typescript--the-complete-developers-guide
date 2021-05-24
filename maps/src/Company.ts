import faker from 'faker'

import { Mappable } from './CustomMap'

export class Company implements Mappable {
  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }

  companyName: string
  catchPhrase: string
  color: string = 'red'
  location: {
    lat: number
    lng: number
  }
}
