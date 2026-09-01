import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface PatientQueueItem {
  id: string;
  name: string;
  initials: string;
  mrn: string;
  vitals: string;
  status: 'HIGH RISK' | 'STABLE' | 'RECOVERING' | 'Active';
  route: string;
}

@Component({
  selector: 'app-patient-queue-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-queue-item.html',
  styleUrl: './patient-queue-item.css',
})
export class PatientQueueItemComponent {
  @Input() patient: PatientQueueItem = {
    id: '',
    name: '',
    initials: '',
    mrn: '',
    vitals: '',
    status: 'Active',
    route: '/patients',
  };

  getStatusClass(): string {
    return `dash-queue__badge--${
      this.patient.status === 'HIGH RISK'
        ? 'high'
        : this.patient.status === 'STABLE' || this.patient.status === 'RECOVERING'
          ? 'neutral'
          : 'default'
    }`;
  }
}
