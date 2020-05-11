import React from "react";
import Main from "./components/Main";
import CurrentDay from "./components/CurrentDay";
import data from "./services/data";
import data2 from "./services/data2";
import "./stylesheets/App.scss";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.state = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDay(),
      date: today.getDate(),
      results: data,
      resultsb: data2[0],
      phase: "--",
      city: "",
      activities: [],
    };

    this.getCity = this.getCity.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("currentPhase", JSON.stringify(this.state.phase));
    localStorage.setItem("currentCity", JSON.stringify(this.state.city));
  }

  componentDidMount() {
    const { month, day } = this.state;
    const phaseInfo = JSON.parse(localStorage.getItem("currentPhase"));
    const cityInfo = JSON.parse(localStorage.getItem("currentCity"));
    if (
      localStorage.getItem("currentPhase") &&
      localStorage.getItem("currentCity")
    ) {
      this.setState({
        phase: phaseInfo,
        city: cityInfo,
      });
    }

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
    } else if (day === 0) {
      this.setState({ day: "domingo" });
    }
  }

  getCity(value) {
    const { resultsb, date, month, results } = this.state;
    const arrays = Object.entries(resultsb);
    const result = arrays.find((array) => array[0] === value);
    const activity = Object.entries(result[1]);
    const activityList = Object.entries(results[0]);
    console.log("APP", activityList[1][1]);
    if (
      date >= activity[0][1].dia &&
      date <= activity[1][1].dia &&
      month === activity[0][1].mes
    ) {
      this.setState({ city: value, phase: 0, activities: activityList[1][1] });
    } else if (
      date >= activity[1][1].dia &&
      date <= activity[2][1].dia &&
      month === activity[1][1].mes
    ) {
      this.setState({ city: value, phase: 1, activities: activityList[1][1] });
    } else if (
      date >= activity[2][1].dia &&
      date <= activity[3][1].dia &&
      month === activity[2][1].mes
    ) {
      this.setState({ city: value, phase: 2, activities: activityList[1][1] });
    } else if (
      date >= activity[3][1].dia &&
      date <= 31 &&
      month === activity[3][1].mes
    ) {
      this.setState({ city: value, phase: 3, activities: activityList[1][1] });
    } else {
      this.setState({ city: value, phase: 4, activities: "nueva normalidad" });
    }
  }

  render() {
    const { year, month, date, day, phase, activities, city } = this.state;
    return (
      <div className="App">
        <CurrentDay month={month} date={date} day={day} year={year} />
        <Main
          month={month}
          date={date}
          day={day}
          phase={phase}
          city={city}
          activities={activities}
          getCity={this.getCity}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
