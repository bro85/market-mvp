# BuildmarketAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

Node.js version - 14.15.5

NPM version - 6.14.11

## Firebase-tools install

**Emails are not sent at this time so no need to install firebase-tools** 

Use firebase-tools to send email. To install it, follow next steps:

- run **_npm install -g firebase-tools@10.0.0_** (Newer versions of firebase-tools have conflicts with node.js)
- run **_firebase login_**
- run **_firebase init_**. Then choose Functions > Use an existing project > Choose current project > Javascript > Use ESLint (Yes) > Install dependencies (Yes)
- run **_cd functions_**
- run **_npm i nodemailer dotenv_**
- Create file _.env_ in the _functions_ folder. Copy paste from file _.env_sample_ and write the needed credentials.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
