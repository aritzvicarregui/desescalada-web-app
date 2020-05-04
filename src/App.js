import React from "react";
// import Main from "./components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.state = {
      month: today.getMonth(),
      day: today.getDate(),
    };
  }

  render() {
    const { month, today } = this.state;
  return <div className="App">{month ===1 ? 'Enero' || month ===2 ? 'Febrero' || month ===3? 'Marzo' || month ===4 ? 'Abril' || month===5?'Mayo'}</div>;
  }
}

export default App;
