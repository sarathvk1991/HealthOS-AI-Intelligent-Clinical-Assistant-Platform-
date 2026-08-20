import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Patients } from './patients/patients';
import { Consultations } from './consultations/consultations';
import { Reports } from './reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'patients', component: Patients },
  { path: 'consultations', component: Consultations },
  { path: 'reports', component: Reports },
];
