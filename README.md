# Crazy-Card-Application

In this project I have develop a web application to allow customers to enter their details and review credit cards that are applicable to their credit status.

## Key Points

### Stack 
- Used React , Redux on the client . Node JS on the server
- `Materialized UI` for CSS and Styling
- Responsive using materialize-ui grids approach
- Routing using `React Router`
- Webpack for bundling

### Code Quality 
**Did not** use  create-react-app instead used my own handrolled Webpack config to keep the project void of any unneccesary dependencies.

- You can see examples of Context , Render Props in the theme handling part.
- Components which do not have any state have been made functional components.
- Wrote a component called `TextFieldGenerator` to generate text fields using json. 
- Snapshot for testing for UI components using Jest
- Business logic is tested by testing the stores.


### Extensibility
- Server has a cards.json config which has all the configs . Adding a card is as simple as adding into the json.
- Client has a Constants.js which has the text fields json for **dynamic form generation** . Adding another field is as easy as adding into the json.

## Build
- Clone the repo 
- Go to the server folder
  - npm i
  - npm run start
  - Server runs at localhost:3000
- Go to client folder
  - yarn
  - yarn start
  - Navigate to localhost:8080
- Run Client tests
  - yarn test

## Description

- The user should submit their details via a form.
- The application should then return a filtered list of cards available to that user.
- The user should be allowed to select one or more of the returned cards.
- When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.
