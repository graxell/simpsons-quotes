import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        className="quoteCard__img"
        src={this.props.img}
        alt={this.props.character}
      />
    );
  }
}

export default Image;
