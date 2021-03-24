
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header'


function App() {

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      {/* create main component */}
      <div className="App-main">
        <div className="CartItems">
          <h1>Shopping Cart</h1>

        </div>
        <div className="CartTotal">

        </div>
      </div>
    </div>
  );
}

export default App;
