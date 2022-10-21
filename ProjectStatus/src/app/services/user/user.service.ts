import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/Interfaces/IUserLogin'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  // */
  // * @param email 
  // * @param password
  // * @return boolean
  // */

  login(user: IUserLogin): boolean {

    if (user.email == "Admin" && user.password === "Admin") {
      return true;
    }
    return false;
  }
}