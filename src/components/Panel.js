import React from "react";
import Activity from "./Activity";
import City from "./City";
import CurrentPhase from "./CurrentPhase";
import Modal from "./Modal";
import Resources from "./Resources";

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
    const {
      month,
      date,
      day,
      phase,
      activities,
      city,
      getCity,
      isRefsOpen,
      other,
    } = this.props;
    const { id } = this.state;

    return (
      <main className="panel">
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
          other={other}
          activities={activities}
          isOpen={this.isModalOpen}
          modalHandler={this.modalHandler}
        />
        <Resources
          isRefsOpen={isRefsOpen}
          openRR={this.props.openRR}
          closeRR={this.props.closeRR}
        />
      </main>
    );
  }
}

export default Panel;
