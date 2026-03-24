import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', telephone: '0123456789' },
    { id: 2, nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@email.com', telephone: '0987654321' }
  ];
}
