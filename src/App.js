import React from 'react';
import './assets/css/App.css';
import Button from './components/Button'
import Calculator from './components/Calculator'
import Label from './components/Label'
import Painel from './components/Painel'

function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <div className="Label">0</div>
        <div className="Painel">
            <button className="Operator">C</button>
            <button className="Operator">+</button>
            <button className="Operator">%</button>
            <button className="Operator">/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="Operator">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="Operator">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="Operator">+</button>
            <button>0</button>
            <button>.</button>
            <div className="Equals-Container">
              <button className="Equals">=</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
