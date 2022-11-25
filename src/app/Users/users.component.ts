import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [UserService],
})
export class UserComponent {
  title = 'Utenti';
  public utenti: any[] = [];
  constructor(private service: UserService) {
    this.utenti = service.getUsers();
  }
}
