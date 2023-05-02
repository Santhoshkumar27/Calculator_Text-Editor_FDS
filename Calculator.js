import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (val) => {
    setResult((prevResult) => prevResult + val);
  };

  const handleKeyDown = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
    if (allowedKeys.includes(event.key)) {
      setResult((prevResult) => prevResult + event.key);
    }
  };

  const handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      solve();
    }
  };

  const solve = () => {
    const y = eval(result); // Note: Using 'eval' here for simplicity, but it's not recommended for production use
    setResult(String(y));
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div>
      <h1 style={{ color: 'rgb(72, 0, 255)' }}>CALCULATOR</h1>
      <h2>SANTHOSH KUMAR E - NAAN MUDHALVAN</h2>
      <table id="calcu">
        <tr>
          <td colSpan="3">
            <input type="text" value={result} onChange={(e) => setResult(e.target.value)} />
          </td>
          <td>
            <input type="button" value="c" onClick={clear} />
          </td>
        </tr>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <tr key={number}>
            <td>
              <input type="button" value={number} onClick={() => handleButtonClick(number.toString())} />
            </td>
            {(number % 3 === 0) && (
              <>
                <td>
                  <input type="button" value="/" onClick={() => handleButtonClick('/')} />
                </td>
              </>
            )}
          </tr>
        ))}
        <tr>
          <td>
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
          </td>
          <td>
            <input type="button" value="=" onClick={solve} />
          </td>
          <td>
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </td>
          <td>
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
