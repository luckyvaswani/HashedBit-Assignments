import React, { useState } from 'react';
import Btn1 from './Btn1';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [output, setOutput] = useState('');

  const handleNumberInput = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div className="calculator">
     Enter the Number 1 = 
     <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => handleNumberInput(e, setNum1)}
      /><br/>
      Enter the Number 2 = 
      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => handleNumberInput(e, setNum2)}
      />
      <Btn1 num1={num1} num2={num2} setOutput={setOutput} /><br/>
      <div className="output">  Output: {output}</div>
    </div>
  );
}

export default Calculator;
