// Import faker
import { faker } from '@faker-js/faker';

// limit location in Vancouver
class VancouverLocation {
    lat: number;
    lng: number;
  
    constructor() {
      this.lat = faker.location.latitude({
        min: 49.1986346,
        max: 49.3457868
      });
      this.lng = faker.location.longitude({
        min: -123.2249742,
        max: -123.0238966
      });
    }
  }

// Declare class Student
class Student {
    private _firstName!: string;
    private _lastName!: string;

    private _location!: VancouverLocation;

    constructor () {
        this._firstName = faker.person.firstName();
        this._lastName = faker.person.lastName();
        this._location = new VancouverLocation();
        
        }
    
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    getStudentLat() {
        return this._location.lat
    }
    getStudentLng() {
        return this._location.lng
    }
}

// Declare class Internship
class Internship {
    private _businessName!: string;
    private _locationBusiness!: VancouverLocation;
    constructor () {
        this._businessName = faker.company.name();
        this._locationBusiness = new VancouverLocation();
    }

    getCompanyName () {
        return `${this._businessName}`
    }
    getLocationBusinessLat () {
        return this._locationBusiness.lat
    }
    getLocationBusinessLng() {
        return this._locationBusiness.lng
    }
}

// Export Student and Internship
export { Student, Internship };
