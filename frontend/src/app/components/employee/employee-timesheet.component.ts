import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

interface TimesheetEntry {
  id: number;
  date_raw: string;
  project: string;
  task_title: string | null;
  hours: number;
  description: string;
  status: 'pending' | 'submitted' | 'approved' | 'rejected';
}

interface DaySummary {
  date: string;
  totalHours: number;
  entries: TimesheetEntry[];
}

interface WeekSummary {
  label: string;
  weekStart: string;
  weekEnd: string;
  totalHours: number;
  days: DaySummary[];
}

@Component({
  selector: 'app-employee-timesheet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="ts-wrap">

  <!-- Header -->
  <div class="ts-header">
    <div class="ts-title">
      <i class="bi bi-clock-history"></i>
      <span>Mes Timesheets</span>
      <span class="ts-total-badge" *ngIf="!loading">{{ filtered.length }} entrée{{ filtered.length !== 1 ? 's' : '' }}</span>
    </div>
    <div class="ts-view-switch">
      <button [class.active]="view==='daily'" (click)="view='daily'">Journalier</button>
      <button [class.active]="view==='weekly'" (click)="view='weekly'">Hebdomadaire</button>
    </div>
  </div>

  <!-- Filtres -->
  <div class="ts-filters">
    <div class="ts-filter-item">
      <label>Période</label>
      <select [(ngModel)]="period" (ngModelChange)="applyFilters()">
        <option value="current_week">Cette semaine</option>
        <option value="last_week">Semaine dernière</option>
        <option value="current_month">Ce mois</option>
        <option value="last_month">Mois dernier</option>
        <option value="last_30_days">30 derniers jours</option>
        <option value="all">Tout</option>
      </select>
    </div>
    <div class="ts-filter-item">
      <label>Statut</label>
      <select [(ngModel)]="statusFilter" (ngModelChange)="applyFilters()">
        <option value="all">Tous</option>
        <option value="pending">En attente</option>
        <option value="submitted">Soumis</option>
        <option value="approved">Approuvé</option>
        <option value="rejected">Rejeté</option>
      </select>
    </div>
    <button class="ts-refresh-btn" (click)="load()" title="Actualiser">
      <i class="bi bi-arrow-clockwise" [class.spin]="loading"></i>
    </button>
  </div>

  <!-- Loading skeleton -->
  <div class="ts-skeleton" *ngIf="loading">
    <div class="sk-row" *ngFor="let i of [1,2,3]">
      <div class="sk-block sk-date"></div>
      <div class="sk-block sk-title"></div>
      <div class="sk-block sk-hours"></div>
      <div class="sk-block sk-status"></div>
    </div>
  </div>

  <!-- Contenu -->
  <ng-container *ngIf="!loading">

    <!-- ── Vue journalière ── -->
    <div *ngIf="view==='daily'" class="ts-daily">
      <div class="ts-day-group" *ngFor="let day of daySummaries">
        <div class="ts-day-header">
          <div class="ts-day-label">
            <i class="bi bi-calendar3"></i>
            {{ formatDate(day.date) }}
          </div>
          <div class="ts-day-total">
            <i class="bi bi-clock"></i> {{ day.totalHours.toFixed(1) }}h
          </div>
        </div>
        <div class="ts-entry" *ngFor="let e of day.entries">
          <div class="ts-entry-left">
            <div class="ts-entry-task">{{ e.task_title || e.description || 'Entrée' }}</div>
            <div class="ts-entry-project">
              <i class="bi bi-folder2"></i> {{ e.project }}
            </div>
            <div class="ts-entry-desc" *ngIf="e.description && e.task_title">{{ e.description }}</div>
          </div>
          <div class="ts-entry-right">
            <div class="ts-entry-hours">{{ e.hours.toFixed(2) }}h</div>
            <div class="ts-status" [class]="'ts-status-' + e.status">{{ statusLabel(e.status) }}</div>
          </div>
        </div>
      </div>

      <!-- Empty -->
      <div class="ts-empty" *ngIf="daySummaries.length === 0">
        <i class="bi bi-calendar-x"></i>
        <p>Aucune entrée pour cette période</p>
        <span>Les timesheets sont créés automatiquement lorsque vous terminez une session de travail sur une tâche.</span>
      </div>
    </div>

    <!-- ── Vue hebdomadaire ── -->
    <div *ngIf="view==='weekly'" class="ts-weekly">
      <div class="ts-week-card" *ngFor="let week of weekSummaries">
        <div class="ts-week-header">
          <div class="ts-week-label">
            <i class="bi bi-calendar-week"></i> {{ week.label }}
          </div>
          <div class="ts-week-total">{{ week.totalHours.toFixed(1) }}h au total</div>
        </div>
        <div class="ts-week-days">
          <div class="ts-week-day" *ngFor="let day of week.days">
            <div class="ts-wd-name">{{ dayName(day.date) }}</div>
            <div class="ts-wd-date">{{ shortDate(day.date) }}</div>
            <div class="ts-wd-hours" [class.has-hours]="day.totalHours > 0">
              {{ day.totalHours > 0 ? day.totalHours.toFixed(1) + 'h' : '—' }}
            </div>
            <div class="ts-wd-sessions">{{ day.entries.length > 0 ? day.entries.length + ' session' + (day.entries.length > 1 ? 's' : '') : '' }}</div>
          </div>
        </div>
      </div>

      <div class="ts-empty" *ngIf="weekSummaries.length === 0">
        <i class="bi bi-calendar-x"></i>
        <p>Aucune entrée pour cette période</p>
      </div>
    </div>

    <!-- ── Statistiques ── -->
    <div class="ts-stats" *ngIf="filtered.length > 0">
      <div class="ts-stat-card">
        <div class="ts-stat-icon blue"><i class="bi bi-clock-history"></i></div>
        <div class="ts-stat-body">
          <div class="ts-stat-val">{{ totalHours.toFixed(1) }}h</div>
          <div class="ts-stat-lbl">Total travaillé</div>
        </div>
      </div>
      <div class="ts-stat-card">
        <div class="ts-stat-icon green"><i class="bi bi-calendar-check"></i></div>
        <div class="ts-stat-body">
          <div class="ts-stat-val">{{ filtered.length }}</div>
          <div class="ts-stat-lbl">Entrées</div>
        </div>
      </div>
      <div class="ts-stat-card">
        <div class="ts-stat-icon orange"><i class="bi bi-graph-up"></i></div>
        <div class="ts-stat-body">
          <div class="ts-stat-val">{{ avgPerDay.toFixed(1) }}h</div>
          <div class="ts-stat-lbl">Moyenne / jour</div>
        </div>
      </div>
      <div class="ts-stat-card">
        <div class="ts-stat-icon purple"><i class="bi bi-trophy"></i></div>
        <div class="ts-stat-body">
          <div class="ts-stat-val">{{ maxDayHours.toFixed(1) }}h</div>
          <div class="ts-stat-lbl">Meilleure journée</div>
        </div>
      </div>
      <div class="ts-stat-card">
        <div class="ts-stat-icon emerald"><i class="bi bi-check-circle"></i></div>
        <div class="ts-stat-body">
          <div class="ts-stat-val">{{ approvedCount }}</div>
          <div class="ts-stat-lbl">Approuvées</div>
        </div>
      </div>
    </div>

  </ng-container>
</div>
  `,
  styles: [`
.ts-wrap {
  background: #0f172a;
  border: 1px solid rgba(99,102,241,0.12);
  border-radius: 16px;
  padding: 24px;
  font-family: 'Inter', sans-serif;
}

/* ── Header ── */
.ts-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
}
.ts-title {
  display: flex; align-items: center; gap: 10px;
  font-size: 17px; font-weight: 700; color: #f1f5f9;
}
.ts-title i { color: #6366f1; font-size: 18px; }
.ts-total-badge {
  background: rgba(99,102,241,0.12); color: #818cf8;
  font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 20px;
  border: 1px solid rgba(99,102,241,0.2);
}
.ts-view-switch {
  display: flex; background: rgba(30,41,59,0.6);
  border: 1px solid rgba(99,102,241,0.15);
  border-radius: 8px; padding: 3px; gap: 2px;
}
.ts-view-switch button {
  background: none; border: none; border-radius: 6px;
  padding: 6px 14px; font-size: 12px; font-weight: 500;
  color: #64748b; cursor: pointer; transition: all 0.2s;
  font-family: inherit;
}
.ts-view-switch button.active {
  background: rgba(99,102,241,0.2); color: #a5b4fc;
}

/* ── Filtres ── */
.ts-filters {
  display: flex; align-items: flex-end; gap: 12px;
  margin-bottom: 20px; flex-wrap: wrap;
}
.ts-filter-item { display: flex; flex-direction: column; gap: 5px; }
.ts-filter-item label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
.ts-filter-item select {
  background: rgba(30,41,59,0.6);
  border: 1px solid rgba(99,102,241,0.15);
  border-radius: 8px; padding: 7px 12px;
  color: #e2e8f0; font-size: 13px; outline: none;
  cursor: pointer; font-family: inherit;
  transition: border-color 0.2s;
}
.ts-filter-item select:focus { border-color: #6366f1; }
.ts-refresh-btn {
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 8px; width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  color: #6366f1; cursor: pointer; font-size: 15px;
  transition: all 0.2s; align-self: flex-end;
}
.ts-refresh-btn:hover { background: rgba(99,102,241,0.2); }
.spin { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Skeleton ── */
.ts-skeleton { display: flex; flex-direction: column; gap: 12px; }
.sk-row {
  display: flex; align-items: center; gap: 12px;
  padding: 16px; background: rgba(30,41,59,0.4);
  border: 1px solid rgba(99,102,241,0.08);
  border-radius: 12px;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
.sk-block { background: rgba(99,102,241,0.1); border-radius: 6px; height: 14px; }
.sk-date  { width: 90px; }
.sk-title { flex: 1; }
.sk-hours { width: 50px; }
.sk-status{ width: 70px; }

/* ── Daily view ── */
.ts-daily { display: flex; flex-direction: column; gap: 16px; }
.ts-day-group {
  background: rgba(15,23,42,0.6);
  border: 1px solid rgba(99,102,241,0.1);
  border-radius: 12px; overflow: hidden;
}
.ts-day-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 16px;
  background: rgba(99,102,241,0.07);
  border-bottom: 1px solid rgba(99,102,241,0.08);
}
.ts-day-label {
  display: flex; align-items: center; gap: 7px;
  font-size: 13px; font-weight: 600; color: #a5b4fc;
}
.ts-day-total {
  display: flex; align-items: center; gap: 5px;
  font-size: 13px; font-weight: 700; color: #6366f1;
}
.ts-entry {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  gap: 12px; transition: background 0.15s;
}
.ts-entry:last-child { border-bottom: none; }
.ts-entry:hover { background: rgba(99,102,241,0.04); }
.ts-entry-left { flex: 1; min-width: 0; }
.ts-entry-task {
  font-size: 13px; font-weight: 600; color: #e2e8f0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  margin-bottom: 3px;
}
.ts-entry-project {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; color: #475569;
}
.ts-entry-project i { color: #6366f1; }
.ts-entry-desc {
  font-size: 11px; color: #475569; margin-top: 3px;
  font-style: italic;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.ts-entry-right { display: flex; align-items: center; gap: 10px; white-space: nowrap; }
.ts-entry-hours { font-size: 14px; font-weight: 700; color: #818cf8; }

/* Status */
.ts-status {
  font-size: 10px; font-weight: 700; padding: 3px 8px;
  border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em;
}
.ts-status-pending   { background: rgba(100,116,139,0.15); color: #94a3b8; border: 1px solid rgba(100,116,139,0.2); }
.ts-status-submitted { background: rgba(14,165,233,0.12);  color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }
.ts-status-approved  { background: rgba(16,185,129,0.12);  color: #34d399; border: 1px solid rgba(16,185,129,0.2); }
.ts-status-rejected  { background: rgba(244,63,94,0.12);   color: #fb7185; border: 1px solid rgba(244,63,94,0.2); }

/* ── Weekly view ── */
.ts-weekly { display: flex; flex-direction: column; gap: 14px; }
.ts-week-card {
  background: rgba(15,23,42,0.6);
  border: 1px solid rgba(99,102,241,0.1);
  border-radius: 12px; overflow: hidden;
}
.ts-week-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  background: rgba(99,102,241,0.07);
  border-bottom: 1px solid rgba(99,102,241,0.08);
}
.ts-week-label {
  display: flex; align-items: center; gap: 7px;
  font-size: 13px; font-weight: 600; color: #a5b4fc;
}
.ts-week-total { font-size: 13px; font-weight: 700; color: #6366f1; }
.ts-week-days {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1px; background: rgba(99,102,241,0.05); padding: 12px; gap: 8px;
}
.ts-week-day {
  background: rgba(30,41,59,0.4);
  border: 1px solid rgba(99,102,241,0.08);
  border-radius: 8px; padding: 10px 8px; text-align: center;
}
.ts-wd-name { font-size: 10px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; }
.ts-wd-date { font-size: 12px; color: #94a3b8; margin: 3px 0; }
.ts-wd-hours { font-size: 16px; font-weight: 700; color: #475569; }
.ts-wd-hours.has-hours { color: #6366f1; }
.ts-wd-sessions { font-size: 10px; color: #334155; margin-top: 3px; }

/* ── Empty ── */
.ts-empty {
  display: flex; flex-direction: column; align-items: center;
  gap: 10px; padding: 48px 20px; text-align: center;
}
.ts-empty i { font-size: 40px; color: #334155; }
.ts-empty p { font-size: 15px; font-weight: 600; color: #475569; margin: 0; }
.ts-empty span { font-size: 12px; color: #334155; max-width: 320px; line-height: 1.5; }

/* ── Stats ── */
.ts-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px; margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(99,102,241,0.1);
}
.ts-stat-card {
  display: flex; align-items: center; gap: 12px;
  background: rgba(15,23,42,0.6);
  border: 1px solid rgba(99,102,241,0.08);
  border-radius: 12px; padding: 14px;
  transition: transform 0.2s;
}
.ts-stat-card:hover { transform: translateY(-2px); }
.ts-stat-icon {
  width: 38px; height: 38px; min-width: 38px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
}
.ts-stat-icon.blue    { background: rgba(59,130,246,0.15);  color: #60a5fa; }
.ts-stat-icon.green   { background: rgba(16,185,129,0.15);  color: #34d399; }
.ts-stat-icon.orange  { background: rgba(245,158,11,0.15);  color: #fbbf24; }
.ts-stat-icon.purple  { background: rgba(139,92,246,0.15);  color: #a78bfa; }
.ts-stat-icon.emerald { background: rgba(16,185,129,0.12);  color: #6ee7b7; }
.ts-stat-val { font-size: 20px; font-weight: 800; color: #f1f5f9; line-height: 1; }
.ts-stat-lbl { font-size: 11px; color: #64748b; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.05em; }

@media (max-width: 640px) {
  .ts-header { flex-direction: column; align-items: flex-start; }
  .ts-filters { flex-direction: column; }
  .ts-stats { grid-template-columns: 1fr 1fr; }
  .ts-entry { flex-direction: column; align-items: flex-start; }
  .ts-entry-right { align-self: flex-end; }
}
  `]
})
export class EmployeeTimesheetComponent implements OnInit {
  view: 'daily' | 'weekly' = 'daily';
  period = 'current_week';
  statusFilter = 'all';
  loading = false;

  private employeeId: number | null = null;
  private allEntries: TimesheetEntry[] = [];
  filtered: TimesheetEntry[] = [];
  daySummaries: DaySummary[] = [];
  weekSummaries: WeekSummary[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    try {
      const stored = localStorage.getItem('currentEmployee');
      if (stored) this.employeeId = JSON.parse(stored)?.id ?? null;
    } catch (_) {}
    this.load();
  }

  load(): void {
    if (!this.employeeId) return;
    this.loading = true;
    this.employeeService.getEmployeeTimesheets(this.employeeId).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res?.success) {
          this.allEntries = res.data || [];
          this.applyFilters();
        }
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    const { start, end } = this.periodRange();
    this.filtered = this.allEntries.filter(e => {
      if (!e.date_raw) return false;
      const d = new Date(e.date_raw);
      if (d < start || d > end) return false;
      if (this.statusFilter !== 'all' && e.status !== this.statusFilter) return false;
      return true;
    });
    this.buildDaySummaries();
    this.buildWeekSummaries();
  }

  private periodRange(): { start: Date; end: Date } {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(today); end.setHours(23, 59, 59);

    switch (this.period) {
      case 'current_week': {
        const start = new Date(today);
        start.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // lundi
        return { start, end };
      }
      case 'last_week': {
        const start = new Date(today);
        start.setDate(today.getDate() - ((today.getDay() + 6) % 7) - 7);
        const e = new Date(start); e.setDate(start.getDate() + 6); e.setHours(23, 59, 59);
        return { start, end: e };
      }
      case 'current_month': {
        const start = new Date(today.getFullYear(), today.getMonth(), 1);
        return { start, end };
      }
      case 'last_month': {
        const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const e = new Date(today.getFullYear(), today.getMonth(), 0); e.setHours(23, 59, 59);
        return { start, end: e };
      }
      case 'last_30_days': {
        const start = new Date(today); start.setDate(today.getDate() - 29);
        return { start, end };
      }
      default: // 'all'
        return { start: new Date(0), end };
    }
  }

  private buildDaySummaries(): void {
    const map = new Map<string, TimesheetEntry[]>();
    for (const e of this.filtered) {
      if (!map.has(e.date_raw)) map.set(e.date_raw, []);
      map.get(e.date_raw)!.push(e);
    }
    this.daySummaries = Array.from(map.entries())
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([date, entries]) => ({
        date,
        totalHours: entries.reduce((s, e) => s + e.hours, 0),
        entries
      }));
  }

  private buildWeekSummaries(): void {
    const weekMap = new Map<string, TimesheetEntry[]>();
    for (const e of this.filtered) {
      const d = new Date(e.date_raw);
      const mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay() + 6) % 7));
      const key = mon.toISOString().split('T')[0];
      if (!weekMap.has(key)) weekMap.set(key, []);
      weekMap.get(key)!.push(e);
    }
    this.weekSummaries = Array.from(weekMap.entries())
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([weekStart, entries]) => {
        const start = new Date(weekStart);
        const end = new Date(start); end.setDate(start.getDate() + 6);
        // Build 7 days
        const days: DaySummary[] = [];
        for (let i = 0; i < 7; i++) {
          const d = new Date(start); d.setDate(start.getDate() + i);
          const dStr = d.toISOString().split('T')[0];
          const dayEntries = entries.filter(e => e.date_raw === dStr);
          days.push({ date: dStr, totalHours: dayEntries.reduce((s, e) => s + e.hours, 0), entries: dayEntries });
        }
        return {
          label: `${this.shortDate(weekStart)} — ${this.shortDate(end.toISOString().split('T')[0])}`,
          weekStart,
          weekEnd: end.toISOString().split('T')[0],
          totalHours: entries.reduce((s, e) => s + e.hours, 0),
          days
        };
      });
  }

  // ── Stats ──────────────────────────────────────────
  get totalHours(): number { return this.filtered.reduce((s, e) => s + e.hours, 0); }
  get avgPerDay(): number {
    const days = new Set(this.filtered.map(e => e.date_raw)).size;
    return days > 0 ? this.totalHours / days : 0;
  }
  get maxDayHours(): number {
    return Math.max(0, ...this.daySummaries.map(d => d.totalHours));
  }
  get approvedCount(): number { return this.filtered.filter(e => e.status === 'approved').length; }

  // ── Formatters ─────────────────────────────────────
  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }
  shortDate(iso: string): string {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }
  dayName(iso: string): string {
    return new Date(iso).toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase();
  }
  statusLabel(s: string): string {
    return ({ pending: 'En attente', submitted: 'Soumis', approved: 'Approuvé', rejected: 'Rejeté' } as any)[s] ?? s;
  }
}
