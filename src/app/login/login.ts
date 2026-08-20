import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ // Component is a decorator that tells Angular "this class is a UI component" and configures how it renders.
  selector: 'app-login',
  /**
   *  RouterLink
   *    1. directive class , not a function
   *    2. Function : RouterLink makes a link switch pages inside the app, without reloading the browser.
   *    3. How it Works in detail : 
   *          RouterLink turns a link's click into an in-app route change instead of a real page reload — 
   *          it intercepts the click, stops the browser's default navigation, and tells 
   *              Angular's Router to swap the component shown in <router-outlet> to match the new path.
   * **/
  imports: [RouterLink], 
  templateUrl: './login.html', // html page used
  styleUrl: './login.css', // css should be used
})
export class Login {}
