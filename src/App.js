import React, { Component } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import Refresh from "./components/Refresh";
import SimpsonsHeader from "./images/simpsons-header.png";
import "./App.css";

class App extends Component {
  state = { data: [], input: "" };

  componentDidMount() {
    this.getDataFromApi();
  }

  // API call
  getDataFromApi = async () => {
    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
      );
      this.setState({ data: response.data });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete button
  handleDelete = (index) => {
    const updatedData = [...this.state.data];
    updatedData.splice(index, 1);
    this.setState({ data: updatedData });
  };

  //Input
  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    let filterData = [...this.state.data];

    if (this.state.input) {
      filterData = filterData.filter((item) => {
        if (
          item.character.toLowerCase().includes(this.state.input.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return (
      <>
        <h1 className="header__simpsons">
          <img src={SimpsonsHeader} alt="The Simpsons title header" />
        </h1>

        <div className="topBar">
          <input
            className="filterBox"
            type="text"
            onInput={this.handleInput}
            placeholder="Type a Simpsons' Character..."
          />

          <Refresh onRefresh={this.getDataFromApi} />
        </div>

        <div className="container">
          {filterData ? (
            <QuoteCard data={filterData} delete={this.handleDelete} />
          ) : (
            <div>Getting your Simpsons quotes ready!</div>
          )}
        </div>
      </>
    );
  }
}

export default App;
