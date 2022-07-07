import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;