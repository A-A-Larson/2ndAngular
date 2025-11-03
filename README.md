# 2ndAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Screenshots

<img width="1684" height="1172" alt="image" src="https://github.com/user-attachments/assets/ed62e3bd-08a7-40dc-a2b0-0ba30bd1efd0" />

## Project Details

This project was created to be used as a sandbox to practice Angular framework tools and libraries and to get familiar with common design patterns and architecture. So far I have used it to get familiar with Angular observables, subscriptions and signals. I also got experience setting up environment variables to hide an API key, basic project structure, creating a service file for API calls and setting up a proxy server for development. It uses the https://trefle.io/ public API. 

## Environment Setup

Copy the template files and add your API key:

1. Copy `src/environments/environment.template.ts` to:
   - `src/environments/environment.ts`
   - `src/environments/environment.development.ts`
   - `src/environments/environment.prod.ts`
2. Add your Trefle API key to each environment file

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
