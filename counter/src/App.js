//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <Counters />
    </React.Fragment>
    
    // <div className="App">
    //   {/* <header className="App-header">
    //     <Counter />
    //   </header> */}
    // </div>
  );
}

export default App;
