import { Injectable } from '@angular/core';

const usersData = [
  {
      firstName: "Adir",
      lastName: "Avraham",
      email: "adir@gmail.com",
      country: "Israel"
  },
  {
      firstName: "Keren",
      lastName: "Avraham",
      email: "Keren@gmail.com",
      country: "England"
  },
  {
      firstName: "Nitzan",
      lastName: "Avraham",
      email: "Nitzan@gmail.com",
      country: "The USA"
  },
  {
      firstName: "Neta",
      lastName: "Avraham",
      email: "Neta@gmail.com",
      country: "Israel"
  },
  {
      firstName: "Alin",
      lastName: "Avraham",
      email: "Alin@gmail.com",
      country: "Australia"
  },
]

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
    public users;
  constructor() { 
    this.users = usersData;
  }

  getUsers() { 
    return this.users 
  }  


}
