import  ReactDOM  from 'react-dom';
import React from "react";
import Greetings from './components/Greetings.jsx'

// render(
//     <Greetings />,
//     document.getElementById('app')
// );

// const element  = (
//     <Greetings />
// );

// ReactDOM.render(
//   element, document.getElementById('app')
//   );
  


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React in the Server</h2>
        </div>
        <Greetings/>
      </div>
    );
  }
}
export default App;