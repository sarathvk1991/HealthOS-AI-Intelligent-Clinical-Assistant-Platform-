import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MetricCardData {
  label: string;
  value: string | number;
  icon: string;
  hint: string;
  variant?: 'default' | 'error' | 'primary';
}

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css',
})
export class MetricCardComponent {
  @Input() metric: MetricCardData = {
    label: 'test',
    value: 'test',
    icon: 'test',
    hint: 'test',
    variant: 'default',
  };
}
