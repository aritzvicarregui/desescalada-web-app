import React from "react";
import Activity1 from "./Activity";
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
    console.log(value);
  }

  render() {
    const { month, date, day, phase } = this.props;
    const { id, modal } = this.state;
    return (
      <div className="panel">
        <CurrentPhase month={month} date={date} day={day} phase={phase} />
        <Activity id={id} phase={phase} displayInfo={this.displayInfo} />
        <Modal
          id={id}
          phase={phase}
          modal={modal}
          isOpen={this.isModalOpen}
          modalHandler={this.modalHandler}
        />
      </div>
    );
  }
}

export default Panel;
