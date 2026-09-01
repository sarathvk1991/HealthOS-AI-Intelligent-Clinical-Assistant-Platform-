import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PatientQueueItemComponent, type PatientQueueItem } from '../patient-queue-item/patient-queue-item';

@Component({
  selector: 'app-patients-queue',
  imports: [CommonModule, RouterLink, PatientQueueItemComponent],
  templateUrl: './patients-queue.html',
  styleUrl: './patients-queue.css',
})
export class PatientsQueueComponent {
  @Input() title: string = 'High Priority Patients Queue';
  @Input() icon: string = 'error';
  @Input() patients: PatientQueueItem[] = [];
}
