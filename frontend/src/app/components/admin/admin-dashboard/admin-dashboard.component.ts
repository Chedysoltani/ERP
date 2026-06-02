import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService, AdminUser, AdminStats } from '../../../services/admin-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  // Layout
  sidebarCollapsed = false;
  mobileMenuOpen = false;
  darkMode = true;
  activeSection = 'overview';
  searchQuery = '';
  showNotifications = false;
  showProfileMenu = false;

  // Data
  stats: AdminStats = { totalUsers: 0, activeEmployees: 0, activeManagers: 0, totalAdmins: 0, todayLogins: 0, inactiveUsers: 0, attendanceToday: 0 };
  users: AdminUser[] = [];
  filteredUsers: AdminUser[] = [];
  activityLogs: any[] = [];
  roleStats: any[] = [];
  growthData: any[] = [];

  // Animated counters
  animatedStats = { totalUsers: 0, activeEmployees: 0, activeManagers: 0, todayLogins: 0 };

  // User management
  userSearch = '';
  userRoleFilter = 'all';
  userStatusFilter = 'all';
  currentPage = 1;
  pageSize = 8;
  showUserModal = false;
  showDeleteModal = false;
  showResetModal = false;
  editingUser: AdminUser | null = null;
  deletingUser: AdminUser | null = null;
  resetPasswordUser: AdminUser | null = null;
  newPassword = '';
  confirmNewPassword = '';
  modalLoading = false;
  modalError = '';
  modalSuccess = '';
  userForm: Partial<AdminUser> & { password?: string; confirmPassword?: string } = {};

  // Permissions config
  permissions: Record<string, Record<string, boolean>> = {
    admin: {
      'Gestion utilisateurs': true, 'Gestion projets': true, 'Gestion tâches': true,
      'Gestion réunions': true, 'Analytics': true, 'Documents': true,
      'Présence': true, 'Configuration': true, 'Rôles & Permissions': true
    },
    manager: {
      'Gestion utilisateurs': true, 'Gestion projets': true, 'Gestion tâches': true,
      'Gestion réunions': true, 'Analytics': true, 'Documents': true,
      'Présence': true, 'Configuration': false, 'Rôles & Permissions': false
    },
    employee: {
      'Gestion utilisateurs': false, 'Gestion projets': false, 'Gestion tâches': true,
      'Gestion réunions': true, 'Analytics': false, 'Documents': true,
      'Présence': true, 'Configuration': false, 'Rôles & Permissions': false
    }
  };
  selectedPermRole = 'admin';

  // System settings
  settings = {
    platformName: 'SIT ERP', maintenanceMode: false,
    registrationOpen: true, emailNotifications: true,
    twoFactorRequired: false, sessionTimeout: 60,
    maxLoginAttempts: 15, aiEnabled: true,
    darkModeDefault: true, language: 'fr'
  };
  settingsSaved = false;
  permissionsSaved = false;

  // Notifications dynamiques
  notifications: Array<{
    id: string; icon: string; text: string; detail: string;
    time: string; color: string; read: boolean;
  }> = [];
  private readNotifIds = new Set<string>();

  private statsInterval: any;
  private animationFrames: number[] = [];

  get admin(): AdminUser | null { return this.adminAuth.currentAdmin; }
  get unreadNotifications(): number { return this.notifications.filter(n => !n.read).length; }

  get pagedUsers(): AdminUser[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
  get totalPages(): number { return Math.ceil(this.filteredUsers.length / this.pageSize); }
  get totalPagesArr(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }

  get permissionsList(): string[] {
    return Object.keys(this.permissions['admin']);
  }

  constructor(private adminAuth: AdminAuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadReadIds();
    this.loadAll();
    this.statsInterval = setInterval(() => { this.loadStats(); this.loadNotifications(); }, 30000);
  }

  ngOnDestroy(): void {
    clearInterval(this.statsInterval);
    this.animationFrames.forEach(id => cancelAnimationFrame(id));
  }

  loadAll(): void {
    this.loadStats();
    this.loadUsers();
    this.loadActivity();
    this.loadRoleStats();
    this.loadGrowth();
    this.loadPermissions();
    this.loadSettingsFromDB();
    this.loadNotifications();
  }

  private loadReadIds(): void {
    try {
      const stored = localStorage.getItem('adminNotifRead');
      if (stored) this.readNotifIds = new Set(JSON.parse(stored));
    } catch (_) {}
  }

  private saveReadIds(): void {
    localStorage.setItem('adminNotifRead', JSON.stringify([...this.readNotifIds]));
  }

  loadNotifications(): void {
    this.adminAuth.getNotifications().subscribe({
      next: res => {
        if (res.success) {
          this.notifications = res.data.map((n: any) => ({
            ...n,
            time: this.timeAgo(n.time),
            read: this.readNotifIds.has(n.id)
          }));
        }
      }
    });
  }

  markNotifRead(notif: any): void {
    notif.read = true;
    this.readNotifIds.add(notif.id);
    this.saveReadIds();
  }

  markAllRead(): void {
    this.notifications.forEach(n => { n.read = true; this.readNotifIds.add(n.id); });
    this.saveReadIds();
  }

  timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1)  return 'À l\'instant';
    if (m < 60) return `Il y a ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24) return `Il y a ${h}h`;
    const d = Math.floor(h / 24);
    return `Il y a ${d}j`;
  }

  loadStats(): void {
    this.adminAuth.getStats().subscribe({
      next: res => {
        if (res.success) {
          this.stats = res.data;
          this.animateCounters();
        }
      }
    });
  }

  loadUsers(): void {
    this.adminAuth.getUsers().subscribe({
      next: res => {
        if (res.success) {
          this.users = res.data;
          this.applyFilters();
        }
      }
    });
  }

  loadActivity(): void {
    this.adminAuth.getActivity().subscribe({
      next: res => { if (res.success) this.activityLogs = res.data; }
    });
  }

  loadRoleStats(): void {
    this.adminAuth.getRoleStats().subscribe({
      next: res => { if (res.success) this.roleStats = res.data; }
    });
  }

  loadGrowth(): void {
    this.adminAuth.getGrowth().subscribe({
      next: res => { if (res.success) this.growthData = res.data; }
    });
  }

  animateCounters(): void {
    const targets = {
      totalUsers: this.stats.totalUsers,
      activeEmployees: this.stats.activeEmployees,
      activeManagers: this.stats.activeManagers,
      todayLogins: this.stats.todayLogins
    };
    const duration = 1200;
    const start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      this.animatedStats = {
        totalUsers: Math.round(targets.totalUsers * ease),
        activeEmployees: Math.round(targets.activeEmployees * ease),
        activeManagers: Math.round(targets.activeManagers * ease),
        todayLogins: Math.round(targets.todayLogins * ease)
      };
      if (progress < 1) {
        const id = requestAnimationFrame(animate);
        this.animationFrames.push(id);
      }
    };
    const id = requestAnimationFrame(animate);
    this.animationFrames.push(id);
  }

  applyFilters(): void {
    let result = [...this.users];
    if (this.userSearch) {
      const q = this.userSearch.toLowerCase();
      result = result.filter(u =>
        u.nom.toLowerCase().includes(q) ||
        u.prenom.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
      );
    }
    if (this.userRoleFilter !== 'all') result = result.filter(u => u.role === this.userRoleFilter);
    if (this.userStatusFilter !== 'all') result = result.filter(u => this.userStatusFilter === 'active' ? u.actif : !u.actif);
    this.filteredUsers = result;
    this.currentPage = 1;
  }

  setSection(section: string): void {
    this.activeSection = section;
    this.mobileMenuOpen = false;
  }

  openCreateUser(): void {
    this.editingUser = null;
    this.userForm = { role: 'employee' };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }

  openEditUser(user: AdminUser): void {
    this.editingUser = user;
    this.userForm = { nom: user.nom, prenom: user.prenom, email: user.email, telephone: user.telephone, role: user.role };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }

  saveUser(): void {
    this.modalError = '';
    this.modalLoading = true;
    const action = this.editingUser
      ? this.adminAuth.updateUser(this.editingUser.id, this.userForm)
      : this.adminAuth.createUser(this.userForm as any);
    action.subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showUserModal = false;
          this.loadUsers();
          this.loadStats();
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }

  confirmDelete(user: AdminUser): void {
    this.deletingUser = user;
    this.showDeleteModal = true;
  }

  deleteUser(): void {
    if (!this.deletingUser) return;
    this.modalLoading = true;
    this.adminAuth.deleteUser(this.deletingUser.id).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showDeleteModal = false;
          this.deletingUser = null;
          this.loadUsers();
          this.loadStats();
        }
      },
      error: () => { this.modalLoading = false; }
    });
  }

  toggleUserStatus(user: AdminUser): void {
    this.adminAuth.toggleUser(user.id).subscribe({
      next: res => {
        if (res.success) {
          user.actif = res.actif;
          this.loadStats();
        }
      }
    });
  }

  openResetPassword(user: AdminUser): void {
    this.resetPasswordUser = user;
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.modalError = '';
    this.showResetModal = true;
  }

  resetPassword(): void {
    if (this.newPassword !== this.confirmNewPassword) {
      this.modalError = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (!this.resetPasswordUser) return;
    this.modalLoading = true;
    this.adminAuth.resetPassword(this.resetPasswordUser.id, this.newPassword).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showResetModal = false;
          this.resetPasswordUser = null;
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur.';
      }
    });
  }

  loadPermissions(): void {
    this.adminAuth.getPermissions().subscribe({
      next: res => {
        if (res.success && Object.keys(res.data).length > 0) {
          // Merge DB permissions into the default structure (keeps defaults if DB is empty)
          for (const role of ['admin', 'manager', 'employee']) {
            if (res.data[role] && Object.keys(res.data[role]).length > 0) {
              this.permissions[role] = { ...this.permissions[role], ...res.data[role] };
            }
          }
        }
      }
    });
  }

  savePermissions(): void {
    this.adminAuth.savePermissions(this.permissions).subscribe({
      next: res => {
        if (res.success) {
          this.permissionsSaved = true;
          setTimeout(() => this.permissionsSaved = false, 3000);
        }
      }
    });
  }

  loadSettingsFromDB(): void {
    this.adminAuth.getSettings().subscribe({
      next: res => {
        if (res.success && Object.keys(res.data).length > 0) {
          this.settings = { ...this.settings, ...res.data };
        }
      }
    });
  }

  saveSettings(): void {
    this.adminAuth.saveSettings(this.settings).subscribe({
      next: res => {
        if (res.success) {
          this.settingsSaved = true;
          setTimeout(() => this.settingsSaved = false, 3000);
        }
      },
      error: () => {
        this.settingsSaved = true;
        setTimeout(() => this.settingsSaved = false, 3000);
      }
    });
  }

  logout(): void {
    this.adminAuth.logout();
    this.router.navigate(['/admin/login']);
  }

  getRoleColor(role: string): string {
    return role === 'admin' ? 'danger' : role === 'manager' ? 'warning' : 'primary';
  }

  getRoleIcon(role: string): string {
    return role === 'admin' ? 'bi-shield-fill' : role === 'manager' ? 'bi-briefcase-fill' : 'bi-person-fill';
  }

  getInitials(user: AdminUser): string {
    return `${user.prenom?.[0] || ''}${user.nom?.[0] || ''}`.toUpperCase();
  }

  getPermCount(role: string, allowed: boolean): number {
    const perms = this.permissions[role];
    if (!perms) return 0;
    return Object.values(perms).filter(v => v === allowed).length;
  }

  getAvatarColor(role: string): string {
    return role === 'admin' ? '#f43f5e' : role === 'manager' ? '#f59e0b' : '#6366f1';
  }

  getRoleBarWidth(role: string): number {
    const found = this.roleStats.find(r => r.role === role);
    if (!found || !this.stats.totalUsers) return 0;
    return Math.round((found.count / this.stats.totalUsers) * 100);
  }

  getMaxGrowth(): number {
    return Math.max(1, ...this.growthData.map(d => d.count));
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.notif-bell-wrap')) this.showNotifications = false;
    if (!target.closest('.profile-menu-wrap')) this.showProfileMenu = false;
  }
}
