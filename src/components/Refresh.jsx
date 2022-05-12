import React, { Component } from "react";

class Refresh extends Component {
  render() {
    return (
      <button className="btn__refresh" onClick={this.props.onRefresh}>
        Get new results
      </button>
    );
  }
}

export default Refresh;
