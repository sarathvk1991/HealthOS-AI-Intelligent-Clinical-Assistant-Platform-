import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Patients } from './patients/patients';
import { Consultations } from './consultations/consultations';
import { Reports } from './reports/reports';
import { MainLayout } from './main-layout/main-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard, data: { title: 'healthos-ai - Executive Overview' } },
      { path: 'patients', component: Patients, data: { title: 'Patient Directory' } },
      { path: 'consultations', component: Consultations, data: { title: 'Consultation Workspace' } },
      { path: 'reports', component: Reports, data: { title: 'Medical Report View: Lab Results' } },
    ],
  },
];
