import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Lista de Playlist</h1>
        <input 
          value={""}
          onChange={""} 
        />
      </div>
    );
  }

  
}

export default App;
