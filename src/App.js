import React, {useState} from 'react';
import './assets/css/App.css';
import Button from './components/Button';
import Calculator from './components/Calculator';
import Label from './components/Label';
import Painel from './components/Painel';
import ButtonOperator from './components/ButtonOperator';
import ButtonEquals from './components/ButtonEquals';

function App() {

  const [expression, setExpression] = useState(0)

  const insertNumber = (label) => {
      setExpression((expression === 0) ? label : expression.toString() + label)
  }

  const insertOperator = (label) => {
    setExpression((
      expression.toString().endsWith("+") || 
      expression.toString().endsWith("-") || 
      expression.toString().endsWith("/") || 
      expression.toString().endsWith("x") ||
      expression.toString().endsWith(".")) ? expression : 
      (expression == 0) ? expression : expression.toString() + label)
  }

  const insertDot = () => {
    setExpression((
        expression.toString().endsWith("+") || 
        expression.toString().endsWith("-") || 
        expression.toString().endsWith("/") || 
        expression.toString().endsWith("x") ||
        expression.toString().endsWith(".")) ? expression : expression.toString() + ".")
  }

  const calc = () => {
    try{
        setExpression(eval(expression));
    } catch(e){
        setExpression("Invalid operation");
    }
  }

  return (
    <div className="App">
      <Calculator>
      <Label expression={expression}></Label>
        <Painel>
            <ButtonOperator click={() => setExpression(0)} label="C"/>
            <ButtonOperator click={insertOperator} label="+"/>
            <ButtonOperator click={insertOperator} label="%"/>
            <ButtonOperator click={insertOperator} label="/"/>
            <Button click={insertNumber} label="7"/>
            <Button click={insertNumber} label="8"/>
            <Button click={insertNumber} label="9"/>
            <ButtonOperator click={insertOperator} label="x"/>
            <Button click={insertNumber} label="4"/>
            <Button click={insertNumber} label="5"/>
            <Button click={insertNumber} label="6"/>
            <ButtonOperator click={insertOperator} label="-"/>
            <Button click={insertNumber} label="1"/>
            <Button click={insertNumber} label="2"/>
            <Button click={insertNumber} label="3"/>
            <ButtonOperator click={insertOperator} label="+"/>
            <Button click={insertNumber} label="0"/>
            <Button click={insertDot} label="."/>
            <ButtonEquals click={calc} label="="/>
        </Painel>
      </Calculator>
    </div>
  );
}

export default App;
