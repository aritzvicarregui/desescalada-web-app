import React from "react";
import Activity from "./Activity";
import City from "./City";
import CurrentPhase from "./CurrentPhase";
import Modal from "./Modal";

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      id: "",
    };

    this.modalHandler = this.modalHandler.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
  }

  modalHandler() {
    this.setState((prevState) => {
      return {
        isModalOpen: !prevState.isModalOpen,
        id: "",
      };
    });
  }

  displayInfo(value) {
    this.setState({ id: value });
  }

  render() {
    const { month, date, day, phase, activities, city, getCity } = this.props;
    const { id } = this.state;
    console.log("PANEL", activities);
    return (
      <div className="panel">
        <City getCity={getCity} city={city} />
        <CurrentPhase month={month} date={date} day={day} phase={phase} />
        <Activity
          id={id}
          phase={phase}
          activities={activities}
          displayInfo={this.displayInfo}
        />
        <Modal
          id={id}
          phase={phase}
          activities={activities}
          isOpen={this.isModalOpen}
          modalHandler={this.modalHandler}
        />
      </div>
    );
  }
}

export default Panel;
