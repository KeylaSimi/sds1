import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
/*import Hello from './Hello';*/

/*function App() {
  return (
  <div>  
    <Hello message="semana devsuperior"/>
    <Hello message="Keyla"/>
    <Hello message="Simi"/>
    <Hello message="teste"/>
  </div> 
  );
}*/

function App() {
  return (
  <div>  
    <Header />
    <Home />
  </div> 
  );
}

export default App;
