import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 *  Start3
 *  App mounted into <app-root>            (from app.ts)
 * **/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
