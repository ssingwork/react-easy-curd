import React from 'react';

import './App.css';
import CartContainer from './containers/CartContainer';
const InnerComponent = () => {
  return (
    <span>
      Innner Body
    </span>
  ) 
}
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Sample My App
        <InnerComponent/>
        <CartContainer></CartContainer>
       </header>
      
    </div>
  );
}

export default App;
