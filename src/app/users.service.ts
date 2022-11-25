import { Injectable } from "@angular/core";
@Injectable()
export class UserService{
  getUsers(){
    return  [
      {
        nome: 'Giorgio',
        cognome: 'larana',
        email: 'Giorgio.larana@gmail.com',
        telefono: '3338920192',
      },
    ];



  }



}