import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Block from './components/Block';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Block />
      <Content />
    </div>
  );
}

export default App;
