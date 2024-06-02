import React from 'react';

function Btn1({ num1, num2, setOutput }) {
  const handleButtonClick = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          result = 'You cannot Divide with zero!';
        } else {
          result = number1 / number2;
        }
        break;
      default:
        result = 'Invalid operation!';
    }

    setOutput(result.toString());
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <button onClick={() => handleButtonClick('/')}>/</button>
    </div>
  );
}

export default Btn1;
