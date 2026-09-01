import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

export interface BannerAction {
  label: string;
  icon: string;
  route?: string;
  action?: () => void;
  variant: 'solid' | 'ghost';
}

@Component({
  selector: 'app-welcome-banner',
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome-banner.html',
  styleUrl: './welcome-banner.css',
})
export class WelcomeBannerComponent {
  @Input() title: string = 'Welcome back';
  @Input() subtitle: string = '';
  @Input() actions: BannerAction[] = [];

  onAction(action: BannerAction) {
    if (action.action) {
      action.action();
    }
  }
}
