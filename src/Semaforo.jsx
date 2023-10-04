import React, { useEffect, useState } from 'react'
import './App.css';

const Semaforo = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (color) {
        case 'red':
          setColor('green');
          break;
        case 'green':
          setColor('yellow');
          break;
        case 'yellow':
          setColor('red');
          break;
        default:
          setColor('red');
      }
    }, 2000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [color])

  return (
    <div className="semaforo">
      <div className={`luz red ${color === 'red' ? 'encendida' : ''}`}></div>
      <div className={`luz yellow ${color === 'yellow' ? 'encendida' : ''}`}></div>
      <div className={`luz green ${color === 'green' ? 'encendida' : ''}`}></div>
    </div>
  );
}

export default Semaforo;
