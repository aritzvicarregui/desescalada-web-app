import React from "react";
import Main from "./components/Main";
import CurrentDay from "./components/CurrentDay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <CurrentDay />
        <Main />
      </div>
    );
  }
}

export default App;
