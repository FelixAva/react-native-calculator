import { useRef, useState } from "react";

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {

  const [ number, setNumber ] = useState('0');
  const [ prevNumber, setPrevNumber ] = useState('0');

  const lastOperation = useRef<Operator>();
  
  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  // Borrar ultimo numero
  const deleteOperation = () => {
    if ( number.startsWith('-') ) {
      if ( number.length === 2 ) return setNumber('0');
    }

    if ( number.length === 1 ) return setNumber('0');

    setNumber( number.slice(0, -1) );
  };

  const toggleSign = () => {
    if ( number.includes('-') ) {
      return setNumber( number.replace('-', '') );
    }

    setNumber( '-' + number );
  };

  const buildNumber = ( numberString: string ) => {

    if ( number.includes('.') && numberString === '.' ) return;

    if ( number.startsWith('0') || number.startsWith('-0') ) {
      // Punto decimal
      if ( numberString === '.' ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es otro cero y no hay punto
      if ( numberString === '0' && number.includes('.') ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if ( numberString !== '0' && !number.includes('.') ) {
        return setNumber( numberString );
      }

      // Evitar 00000
      if ( numberString === '0' && !number.includes('.') ) return;

      return setNumber( number + numberString );
    };

    setNumber( number + numberString );
  };

  const setLasNumber = () => {
    if ( number.endsWith('.') ) {
      setPrevNumber( number.slice(0, -1) );
    } else {
      setPrevNumber( number );
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLasNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLasNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLasNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLasNumber();
    lastOperation.current = Operator.add;
  };

  return {
    // Properties
    number,
    buildNumber,
    prevNumber,

    // Methods
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  };
};