import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  date_creation: string;
  actif: boolean;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  loading = false;
  showCreateModal = false;
  showEditModal = false;
  
  // Formulaire de création
  newUser = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: ''
  };
  
  // Formulaire d'édition
  userToEdit: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.authService.getAllUsers().subscribe({
      next: (response: any) => {
        console.log('Utilisateurs chargés:', response);
        this.users = response.data || [];
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        alert('Erreur lors du chargement des utilisateurs');
        this.loading = false;
      }
    });
  }

  openCreateModal() {
    this.newUser = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      password: ''
    };
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newUser = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      password: ''
    };
  }

  createUser() {
    if (!this.newUser.nom || !this.newUser.prenom || !this.newUser.email || !this.newUser.password) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.loading = true;
    this.authService.createUser(this.newUser).subscribe({
      next: (response: any) => {
        console.log('Utilisateur créé:', response);
        alert('Utilisateur créé avec succès');
        this.closeCreateModal();
        this.loadUsers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        alert('Erreur lors de la création de l\'utilisateur');
        this.loading = false;
      }
    });
  }

  editUser(user: User) {
    this.userToEdit = { ...user };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.userToEdit = null;
  }

  updateUser() {
    if (!this.userToEdit || !this.userToEdit.nom || !this.userToEdit.prenom || !this.userToEdit.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.loading = true;
    const updateData = {
      nom: this.userToEdit.nom,
      prenom: this.userToEdit.prenom,
      email: this.userToEdit.email,
      telephone: this.userToEdit.telephone || ''
    };

    this.authService.updateUser(this.userToEdit.id, updateData).subscribe({
      next: (response: any) => {
        console.log('Utilisateur mis à jour:', response);
        alert('Utilisateur mis à jour avec succès');
        this.closeEditModal();
        this.loadUsers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        alert('Erreur lors de la mise à jour de l\'utilisateur');
        this.loading = false;
      }
    });
  }

  deleteUser(userId: number, userName: string) {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur "${userName}" ?`)) {
      return;
    }

    this.loading = true;
    this.authService.deleteUser(userId).subscribe({
      next: (response: any) => {
        console.log('Utilisateur supprimé:', response);
        alert('Utilisateur supprimé avec succès');
        this.loadUsers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        alert('Erreur lors de la suppression de l\'utilisateur');
        this.loading = false;
      }
    });
  }
}
