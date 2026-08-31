import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleItemComponent, type ScheduleItemData } from '../schedule-item/schedule-item';

@Component({
  selector: 'app-schedule-list',
  imports: [CommonModule, ScheduleItemComponent],
  templateUrl: './schedule-list.html',
  styleUrl: './schedule-list.css',
})
export class ScheduleListComponent {
  @Input() title: string = "Today's Schedule";
  @Input() icon: string = 'event';
  @Input() scheduleItems: ScheduleItemData[] = [];
}
