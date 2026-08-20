import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 *   1. App- Starts here -> start2
 * 
 *   bootstrapApplication
 *    
 *    1. Build in function provided by Angular
 *    2. Accepts two parameter
 *         a. App - which component to load
 *         b. appConfig - Default Application configuration 
 *                        Services/Features the whole app needs available via dependency injection      
 * **/
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
