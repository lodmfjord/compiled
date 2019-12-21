import React, { useState } from 'react';
import { styled } from '../src';

export default {
  title: 'styled component dynamic object',
};

var Highlight = styled.div<{ primary: string }>({
  fontSize: '20px',
  color: props => props.primary,
  margin: '20px',
  ':hover': {
    color: 'red',
  },
});

export var objectLiteral = () => {
  var [color, setColor] = useState('blue');

  return (
    <>
      <Highlight primary={color}>hello world</Highlight>

      <button onClick={() => setColor('red')}>red</button>
      <button onClick={() => setColor('green')}>green</button>
      <button onClick={() => setColor('blue')}>blue</button>
    </>
  );
};