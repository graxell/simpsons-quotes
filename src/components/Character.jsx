import React, { Component } from "react";

class Character extends Component {
  render() {
    return <p className="quoteCard__name">{this.props.character}</p>;
  }
}

export default Character;
