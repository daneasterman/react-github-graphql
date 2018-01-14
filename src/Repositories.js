import React, { Component } from 'react';
import './App.css';
import { GraphQLClient } from 'graphql-request'

class Repositories extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      repos: [] 
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
        repositories(first: 15) {
          edges {
            node {
              name          
            }
          }
        }
      }
    }`

    client.request(query) 
      .then(data => {
        const repoEdges = data.user.repositories.edges
        const repos = repoEdges.map(obj => obj.node.name);
        this.setState({ repos });        
      })
      .catch(err => {
        console.log(err)
      })   
  }

  render() {    
    const { repos } = this.state;

    let repoList;    
    repoList = repos.map((repoName, index) => {
      return <p key={index} className="App-intro">{repoName}</p>      
    });

    return (
      <div className="App">
        <h2 className="App-subtitle">Repositories:</h2>
        {repoList}
      </div>
      );    
  } // end render

}

export default Repositories;