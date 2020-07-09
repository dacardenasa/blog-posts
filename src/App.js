import React from 'react';
import {Posts} from './components/ListPosts';

function App() {
  const stylesTitle = {
    marginTop: '10px',
    borderBottom: '1px solid',
    padding: '0 0 10px 0',
    color: '#ea907a',
    fontWeight: 'bold'
  }
  return (
    <div className="container">
      <h1 className="text-center" style={stylesTitle}>Blog posts populares</h1>
      <Posts />
    </div> 
  );
}

export default App;
