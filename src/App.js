import React from "react";
import Main from "./components/Main";
import CurrentDay from "./components/CurrentDay";
import "./stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.state = {
      month: today.getMonth() + 1,
      day: today.getDay(),
      date: today.getDate(),
      phase: "",
    };
  }

  componentDidMount() {
    const { month, date, day } = this.state;
    if (month === 1) {
      this.setState({ month: "enero" });
    } else if (month === 2) {
      this.setState({ month: "febrero" });
    } else if (month === 3) {
      this.setState({ month: "marzo" });
    } else if (month === 4) {
      this.setState({ month: "abril" });
    } else if (month === 5) {
      this.setState({ month: "mayo" });
    } else if (month === 6) {
      this.setState({ month: "junio" });
    } else if (month === 7) {
      this.setState({ month: "julio" });
    } else if (month === 8) {
      this.setState({ month: "agosto" });
    } else if (month === 9) {
      this.setState({ month: "septiembre" });
    } else if (month === 10) {
      this.setState({ month: "octubre" });
    } else if (month === 11) {
      this.setState({ month: "noviembre" });
    } else {
      this.setState({ month: "diciembre" });
    }

    if (day === 1) {
      this.setState({ day: "lunes" });
    } else if (day === 2) {
      this.setState({ day: "martes" });
    } else if (day === 3) {
      this.setState({ day: "miércoles" });
    } else if (day === 4) {
      this.setState({ day: "jueves" });
    } else if (day === 5) {
      this.setState({ day: "viernes" });
    } else if (day === 6) {
      this.setState({ day: "sábado" });
    } else if (day === 7) {
      this.setState({ day: "domingo" });
    }

    if (month === 5 && date >= 4 && date < 11) {
      this.setState({ phase: 0 });
    } else if (month === 5 && date >= 11 && date < 25) {
      this.setState({ phase: 1 });
    } else if (month === 5 && date >= 25) {
      this.setState({ phase: 2 });
    } else if (month === 6 && date >= 8) {
      this.setState({ phase: 3 });
    }
  }

  render() {
    const { month, date, day, phase } = this.state;
    return (
      <div className="App">
        <CurrentDay month={month} date={date} day={day} />
        <Main month={month} date={date} day={day} phase={phase} />
      </div>
    );
  }
}

export default App;
