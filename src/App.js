import React, { Component } from "react";
import "./scss/App.scss";
import logo from "./assets/logo.svg";
import { GameTimeAPI } from "./api/GameTimeApi";
import SearchBox from "./components/Search";
import SearchResults from "./components/Results";
import ParseSearch from "./helpers/parseSearch";
import debounce from "lodash/debounce";
export default class App extends Component {
  state = {
    query: "",
    results: []
  };

  delayedSearch = debounce(GameTimeAPI, 500);

  onSearch = async e => {
    // get query results
    // set await because setState is async, otherwise our delayed search get's called before we're done typing all letters
    await this.setState({ query: e.target.value });
    // get data
    let response = await this.delayedSearch(this.state.query);
    // Format data
    response = ParseSearch(response);
    // Update state
    this.setState({ results: response });
  };

  render() {
    return (
      <div className="gametime-main">
        <img alt="GameTime Logo" src={logo} />
        <SearchBox
          value={this.state.query}
          onSearch={this.onSearch}
          ref={this.searchBoxInput}
        />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}
