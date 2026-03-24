import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Bienvenue sur votre application';
  description = 'Application web moderne avec Angular, Node.js et MySQL';
  
  features = [
    {
      title: 'Gestion des Utilisateurs',
      description: 'Créez, modifiez et gérez les utilisateurs de votre application',
      icon: 'bi-people'
    },
    {
      title: 'Catalogue de Produits',
      description: 'Gérez votre inventaire de produits avec catégories',
      icon: 'bi-box'
    },
    {
      title: 'Base de Données MySQL',
      description: 'Stockage sécurisé et performant avec HeidiSQL',
      icon: 'bi-database'
    }
  ];
}
