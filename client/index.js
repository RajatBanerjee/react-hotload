import  ReactDOM  from 'react-dom';
import React from 'react';
import Greetings from './components/Greetings.jsx'

// render(
//     <Greetings />,
//     document.getElementById('app')
// );

const element  = (
    <Greetings />
);

ReactDOM.render(
  element, document.getElementById('app')
  );
  