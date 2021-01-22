import { Injectable } from '@angular/core';

export class City {
  constructor( public cityId: string, public cityName: string){
  }
}

export class User {
  idUser : number;
  firstName:string;
  lastName:string;
  city : City[];
  email: string;
  password: string;

  constructor(){}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: number = 0;
  idModification: number = 0;
  users: User[]=[];

  getCities(): City[] {
    let cities = [
      new City('I', 'Inde'),
      new City('J', 'Japon'),
      new City('L', 'Lisbonne'),
      new City('P', 'Paris')
    ];
    return cities;
  }


  createUser(user: User) : any[] {
    console.log(JSON.stringify(this.users))
    this.id++;
    user.idUser = this.id;
    this.users.push(user);
    return this.users;
  }

  getUserByUserId(id : number) : User{
    for (let i=0; i<this.users.length; i++ ){
      let  u : User = this.users[i];
      if (id == u.idUser){
        return u;
      }
    }
  }



}
