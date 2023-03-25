import React from "react";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes";

function App() {
  const [clicker, setClicker] = React.useState(boxes);
  const mapBox = boxes.map((b) => {
    return <Box key={b.id} on={b.on} />;
  });

  return(
    <div className="container">
      <h1>CLick the boxes to switch between Black and Transparent</h1>
      
      {mapBox}
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
