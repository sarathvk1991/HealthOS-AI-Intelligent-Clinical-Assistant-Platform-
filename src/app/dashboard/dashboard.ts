import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent, type BannerAction } from './welcome-banner/welcome-banner';
import { MetricCardComponent, type MetricCardData } from './metric-card/metric-card';
import { PatientsQueueComponent } from './patients-queue/patients-queue';
import { ScheduleListComponent } from './schedule-list/schedule-list';
import { type PatientQueueItem } from './patient-queue-item/patient-queue-item';
import { type ScheduleItemData } from './schedule-item/schedule-item';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    WelcomeBannerComponent,
    MetricCardComponent,
    PatientsQueueComponent,
    ScheduleListComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  bannerTitle = 'Welcome back, Dr. Reed';
  bannerSubtitle = 'Lead Practitioner • Medical ID: 884-2103 • Clinical AI Active';

  bannerActions: BannerAction[] = [
    {
      label: 'Start Consult',
      icon: 'medical_services',
      route: '/consultations',
      variant: 'solid',
    },
    {
      label: 'Add Patient',
      icon: 'add',
      variant: 'ghost',
      action: () => this.handleAddPatient(),
    },
  ];

  metrics: MetricCardData[] = [
    {
      label: 'Total Patients',
      value: 7,
      icon: 'group',
      hint: 'Active in directory',
      variant: 'default',
    },
    {
      label: 'Critical Flags',
      value: 2,
      icon: 'warning',
      hint: 'Requires immediate review',
      variant: 'error',
    },
    {
      label: 'Lab Reports',
      value: 12,
      icon: 'description',
      hint: 'CMP & Lipid ready',
      variant: 'default',
    },
    {
      label: 'AI Insights',
      value: '98.4%',
      icon: 'auto_awesome',
      hint: 'Accuracy score',
      variant: 'primary',
    },
  ];

  patients: PatientQueueItem[] = [
    {
      id: '1',
      name: 'Eleanor Vance',
      initials: 'EV',
      mrn: 'MRN-100001',
      vitals: 'BP 145/90',
      status: 'HIGH RISK',
      route: '/patients',
    },
    {
      id: '2',
      name: 'Jameson Locke',
      initials: 'JL',
      mrn: 'MRN-100002',
      vitals: 'BP 122/80',
      status: 'STABLE',
      route: '/patients',
    },
    {
      id: '3',
      name: 'Sarah Jenkins',
      initials: 'SJ',
      mrn: 'MRN-100003',
      vitals: 'BP 128/82',
      status: 'RECOVERING',
      route: '/patients',
    },
    {
      id: '4',
      name: 'John Doe',
      initials: 'JD',
      mrn: 'MRN-100004',
      vitals: 'BP 124/80',
      status: 'Active',
      route: '/patients',
    },
  ];

  scheduleItems: ScheduleItemData[] = [
    {
      patientName: 'Eleanor Vance',
      detail: 'Follow-up HbA1c & Diabetes',
      time: '10:42 AM',
      isUpcoming: true,
    },
    {
      patientName: 'Jameson Locke',
      detail: 'Routine Checkup & Vitals',
      time: '02:00 PM',
      isUpcoming: false,
    },
    {
      patientName: 'Sarah Jenkins',
      detail: 'Post-op ACL Knee Review',
      time: '03:30 PM',
      isUpcoming: false,
    },
  ];

  handleAddPatient() {
    console.log('Add Patient clicked');
    // TODO: Implement add patient modal
  }
}
