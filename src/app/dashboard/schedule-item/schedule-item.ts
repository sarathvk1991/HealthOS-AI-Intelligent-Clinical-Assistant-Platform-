import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ScheduleItemData {
  patientName: string;
  detail: string;
  time: string;
  isUpcoming?: boolean;
}

@Component({
  selector: 'app-schedule-item',
  imports: [CommonModule],
  templateUrl: './schedule-item.html',
  styleUrl: './schedule-item.css',
})
export class ScheduleItemComponent {
  @Input() item: ScheduleItemData = {
    patientName: '',
    detail: '',
    time: '',
    isUpcoming: false,
  };

  getTimeClass(): string {
    return this.item.isUpcoming
      ? 'dash-schedule__time--accent'
      : 'dash-schedule__time--muted';
  }
}
