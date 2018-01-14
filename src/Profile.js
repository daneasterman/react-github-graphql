import React, { Component } from 'react';
import './App.css';
import { GraphQLClient } from 'graphql-request'

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      email: "",
      avatarUrl: "",
      location: "",
      websiteUrl: "",
      error: null
    };    
  }

  componentDidMount() {    

  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {      
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
    },
  })
   
  const query = `{
    user(login: "daneasterman") {
       name
       url
       email
       avatarUrl       
       location 
       websiteUrl     
     }
  }`
   
  client.request(query) 
    .then(data => {
      const name = data.user.name
      const url = data.user.url
      const email = data.user.email
      const avatarUrl = data.user.avatarUrl
      const location = data.user.location
      const websiteUrl = data.user.websiteUrl
      // Put this in state
      this.setState({
        name: name,
        url: url,
        email: email,
        avatarUrl: avatarUrl,
        location: location,
        websiteUrl: websiteUrl
      })
      // console.log(email)
    })
    .catch(err => {
      this.setState({error: err})
    });
}

renderError() {
  return (
    <div>
      Something went wrong: {this.state.error.message}
    </div>
  );
}

  render() {

    const { error, name, url, email, avatarUrl, location, websiteUrl } = this.state;

    if (error) {
      return this.renderError();
    }

    return (
      <div className="App">

        <header className="App-header">          
          <h1 className="App-title">GraphQL Github API </h1>
        </header>

        <h2 className="App-subtitle">Profile:</h2>

        <p className="App-intro">{name}</p>
        <p className="App-intro">{url}</p>
        <p className="App-intro">{email}</p>
        <img src={avatarUrl} alt="github-profile-avatar"></img>
        <p className="App-intro">{location}</p>
        <p className="App-intro">{websiteUrl}</p>        

      </div>
    );
  }
}

export default Profile;
