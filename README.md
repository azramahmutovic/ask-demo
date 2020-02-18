# Ask App Demo

This is a demo app for asking and answering questions made in Angular 9. 
It uses [@ngrx/store](https://ngrx.io/) for state management, 
[json-server](https://github.com/typicode/json-server) for a fake REST API and
[clarity](https://clarity.design/) HTML/CSS framework.
App is deployed on Heroku and uses Travis for CI.
Live demo [here](https://ask-demo.herokuapp.com/)

## Development server

Run `npm run mock:server` to run mock server.
Open another terminal and run `npm run start:proxy` to start the app.
You can run both in the same terminal with the `npm run start:proxy:mock:server` command.
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.