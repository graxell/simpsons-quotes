import React, { Component } from "react";
import deleteIcon from "../images/delete-button.png";

class Delete extends Component {
  state = {};

  render() {
    return (
      <>
        <button
          className="btn__delete"
          onClick={() => this.props.delete(this.props.index)}
        >
          <img src={deleteIcon} alt="Delete Icon" />
        </button>
      </>
    );
  }
}

export default Delete;
