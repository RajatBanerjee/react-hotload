import React from "react";
import { render } from "react-dom";
import Greetings from './components/Greetings.jsx'

render(<div className="App">
<div className="App-header">
  <h2>Welcome to React in the Server</h2>
</div>
<Greetings/>
</div>, document.getElementById("root"));