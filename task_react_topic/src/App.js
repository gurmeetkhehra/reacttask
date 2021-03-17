import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import { render } from '@testing-library/react';
import DisplayContent from "./components/display";
import styled from 'styled-components';

const HrElement = styled.hr`
 border:2px solid green;
`
class App extends React.Component {

  state = { searchTerm: 'react', click: 0 };

  constructor() {
    super();
  }
  
  handleSearchChange = key => {
    //update the search term when user type in the search bar
    this.setState({ searchTerm: key });
  
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  
  };

  render(){
    //check to see if react will re-render
   
    return (
      
      <div>
        <SearchBar initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={this.state.searchTerm}></DisplayContent>
          <HrElement/>
        
        </div>
     
      </div>
    );
  }
}

export default App;
