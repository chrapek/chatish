import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="main">
      <Container>
        <Chat/> 
      </Container>
    </div>
  );
}

export default App;
