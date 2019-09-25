import React, { Component } from "react";
import "./scss/App.scss";
import logo from "./assets/logo.svg";
import { GameTimeAPI } from "./api/GameTimeApi";
import SearchBox from "./components/Search";
import SearchResults from "./components/Results";
import ParseSearch from "./helpers/parseSearch";
import debounce from "lodash/debounce";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  state = {
    query: "",
    results: []
  };

  delayedSearch = debounce(GameTimeAPI, 300);
  async onSearch(e) {
    // get query results
    this.setState({ query: e.target.value });

    // get data
    let response = await this.delayedSearch(this.state.query);
    // let response = await GameTimeAPI(this.state.query);
    console.log("response:", response);
    this.setState({ results: ParseSearch(response) });
  }

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
