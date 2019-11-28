import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import RepoList from './components/RepoList.jsx';
import GitProfileDetails from './components/GitProfileDetails.jsx';
import ProgrammingLang from './components/ProgrammingLang.jsx';
import lda from './lda';
import Plot from 'react-plotly.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap';
//import Tabs from './components/Tabs.jsx'
import BarChart from './components/BarChart.jsx'
import PieChart from './components/PieChart.jsx'
import HorizontalTabs from './components/HorizontalTabs.jsx'
import logo from './logo.png'


import './App.css';
import './index.css';
//import './index.html';

import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
{/* <hr></hr>
        Profile Details:
        <GitProfileDetails infoclean={this.state.infoclean}/>
        <hr></hr>
        Repositories:
        <RepoList repitems={this.state.repitems}/>
        <hr></hr>
        Starred Repositories:
        <RepoList repitems={this.state.staritems}/>
        <hr></hr>
        Programming Languages:
        <ProgrammingLang langslist={this.state.replanguagecount}/> */}
//import './d3.js';
{/* <HorizontalTabs 
          repitems={this.state.repitems} 
          staritems={this.state.staritems} 

          infoclean = {this.state.infoclean}

          followers={this.state.followers}
          following={this.state.following}
        /> */}

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
      info: '',
      formData: {
        username: '',
      },
      repitems: null,
      staritems: null,
      replanguagecount: {},
      keywords: null
}
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }
handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      infoclean: response.data,
      info : JSON.stringify(response.data, undefined, 2)
    })).catch((err) => { console.log(err); });
axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos')
    .then(response => {
var itemsWithFalseForks = response.data.filter(item => item.fork === false)
var sortedItems = itemsWithFalseForks.sort((b,a) => {
        if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
          return -1
        }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
          return 1
        }else {
          return 0
        }
      })
let dictrlc = Object.assign({}, this.state.replanguagecount);
      for (var i = 0; i < itemsWithFalseForks.length; i++) {
          dictrlc[itemsWithFalseForks[i]['language']] = -~ dictrlc[itemsWithFalseForks[i]['language']]
      }
this.setState({
        repitems: sortedItems.slice(0,10),
        replanguagecount: dictrlc,
      })
}).catch((err) => { console.log(err); })
axios.get('https://api.github.com/users/'+this.state.formData.username+'/starred')
    .then(response => {
var itemsWithFalseForks = response.data.filter(item => item.fork === false)
var sortedItems = itemsWithFalseForks.sort((b,a) => {
        if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
          return -1
        }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
          return 1
        }else {
          return 0
        }
      })
var documents = []
      for (var i = 0; i < response.data.length; i++) {
          var descr = response.data[i]['description']
          if (descr != null) {
            var newtext = descr.match(/[^.!?]+[.!?]+/g)
            if (newtext != null) {
              documents = documents.concat(newtext)
            }
          }
      }
      var result = lda(documents, 3, 3);
      var keywords = new Set()
      for (var k = 0; k < 3; k++) {
        for (var j = 0; j < 3; j++) {
          keywords = keywords.add(result[k][j]['term']);
        }
      }
this.setState({
        staritems: sortedItems.slice(0,10),
        keywords: Array.from(keywords).join(', ')
      })
}).catch((err) => { console.log(err); })
};
handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Analytics</h1>
        </header>
        <hr></hr>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <hr></hr>
          <h1 className="sub-header">Profile Details:</h1>
        <GitProfileDetails infoclean={this.state.infoclean}/>
        <hr></hr>
          <h1 className="sub-header">Repositories:</h1>
        <RepoList repitems={this.state.repitems}/>
        <hr></hr>
          <h1 className="sub-header">Programming Languages:</h1>
        <ProgrammingLang langslist={this.state.replanguagecount}/>
        <img src = {logo} alt = "website logo" style={{ alignSelf: 'center'}}/>
      </div>
      
    );
  }
}
export default App;