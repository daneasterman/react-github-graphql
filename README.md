# React and the Github GraphQL API


## Install:

1. Clone this repository: `git clone https://github.com/daneasterman/react-github-graphql.git`

2. Install all the project dependencies: `npm install`

## Security Configuration and Github personal access token:

1. In order to make requests to the Github GraphQL API we need a personal access token to authenticate and gain access to the service. Follow the steps in [this Github guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) to generate your token.

2. Due to security considerations, we don't want the personal token to be visible to the outside world - if we push up our code to a public Github repository for example.

So, first create a `.env` file in the root of the directory.

Then copy and paste in the file: `REACT_APP_GITHUB_TOKEN='Bearer [insert-your-long-alphanumeric-token-here]'`

## Start the project:

```
npm start
```
(This should automatically launch the app in your default browser at `localhost:3000` )

## Background Information:

Due to the small size of this app and the time constraints involved, I found the best way to complete this project was with the lightweight and easy-to-use `graphql-request` library. 
More information can be found here: [https://www.npmjs.com/package/graphql-request](https://www.npmjs.com/package/graphql-request)

For larger projects, I would look to use more complex GraphQL clients such as `Apollo` or Facebook's `Relay` which include features such as caching to optimise for the best possible performance.

For initial testing and exploring the Github GraphQL API (including built-in documentation and autocomplete) I used the electron-made desktop app: `GraphiQL` found here:
[https://github.com/skevy/graphiql-app](https://github.com/skevy/graphiql-app)

N.B: The main react code is split according to the two tasks required to complete this project: `Profile.js` and `Repositories.js`
This code example uses my github username: `daneasterman` to display the data from the Github GraphQL API.
