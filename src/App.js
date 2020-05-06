import React from "react";
import Main from "./components/Main";
import CurrentDay from "./components/CurrentDay";
import data from "./services/data";
import "./stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.state = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDay(),
      date: today.getDate(),
      phase: "",
      results: data,
      modal: [],
    };
  }

  componentDidMount() {
    const { month, date, day, results } = this.state;

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
      this.setState({ phase: 0, modal: results[0].activities });
    } else if (month === 5 && date >= 11 && date < 25) {
      this.setState({ phase: 1, modal: results[1].activities });
    } else if (month === 5 && date >= 25) {
      this.setState({ phase: 2, modal: results[2].activities });
    } else if (month === 6 && date >= 8) {
      this.setState({ phase: 3, modal: results[3].activities });
    }
  }

  render() {
    const { year, month, date, day, phase, modal } = this.state;
    return (
      <div className="App">
        <CurrentDay month={month} date={date} day={day} year={year} />
        <Main month={month} date={date} day={day} phase={phase} modal={modal} />
      </div>
    );
  }
}

export default App;
