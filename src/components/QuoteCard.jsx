import React, { Component } from "react";
import Image from "./Image";
import Character from "./Character";
import Quote from "./Quote";
import Delete from "./Delete";

class QuoteCard extends Component {
  render() {
    return this.props.data.map((item, index) => {
      return (
        <div key={index} className="quoteCard">
          <div className={item.characterDirection}>
            <Image img={item.image} character={item.character} />

            <div>
              <Quote quote={item.quote} />
              <Character character={item.character} />
            </div>

            <Delete delete={this.props.delete} index={index} />
          </div>
        </div>
      );
    });
  }
}

export default QuoteCard;
