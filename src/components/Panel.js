import React from "react";
import Activity0 from "./Activity0";
import Activity1 from "./Activity1";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
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

  getActivity() {
    const { phase } = this.props;
    const { id, isModalOpen } = this.state;
    if (phase === 0) {
      return (
        <div>
          <Activity0 id={id} displayInfo={this.displayInfo} />
          <Modal
            id={id}
            isOpen={isModalOpen}
            modalHandler={this.modalHandler}
          />
        </div>
      );
    } else if (phase === 1) {
      return <Activity1 id={id} displayInfo={this.displayInfo} />;
    } else if (phase === 2) {
      return <Activity2 id={id} displayInfo={this.displayInfo} />;
    } else {
      return <Activity3 id={id} displayInfo={this.displayInfo} />;
    }
  }
  render() {
    const { month, date, day, phase } = this.props;
    return (
      <div className="panel">
        <CurrentPhase month={month} date={date} day={day} phase={phase} />
        {this.getActivity()}
      </div>
    );
  }
}

export default Panel;
