import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // guarda a expressão matemática
  const [result, setResult] = useState(''); // guarda o resultado

  // Função para atualizar a entrada conforme os botões são clicados
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Função para calcular o resultado
  const calculate = () => {
    try {
      const calculatedResult = eval(input); // calcula a expressão
      setResult(calculatedResult);
    } catch (error) {
      setResult('Erro');
    }
  };

  // Função para limpar a entrada e o resultado
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Calculadora React</h1>
      <div className="display">
        <div>{input || '0'}</div>
        <div className="result">{result !== '' && `= ${result}`}</div>
      </div>
      <div className="buttons">
        <button onClick={clear} className="clear">C</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;
