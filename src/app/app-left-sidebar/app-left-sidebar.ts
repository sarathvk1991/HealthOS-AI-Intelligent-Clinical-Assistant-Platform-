import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-left-sidebar.html',
  styleUrl: './app-left-sidebar.css',
})
export class AppLeftSidebar {}
