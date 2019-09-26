import React, { Component } from "react";
import "./scss/App.scss";
import logo from "./assets/logo.svg";
import { GameTimeAPI } from "./api/GameTimeApi";
import SearchBox from "./components/Search";
import SearchResults from "./components/Results";
import { ParseSearch } from "./helpers/parseSearch";
import debounce from "lodash/debounce";

export default class App extends Component {
  state = {
    query: "",
    results: new Map(),
    resultCount: 0
  };

  delayedSearch = debounce(this.getSearch, 500);
  async getSearch() {
    // get data
    let response = await GameTimeAPI(this.state.query);
    // let response = await GameTimeAPI(this.state.query);

    // Format data
    response = ParseSearch(response);

    // get result count
    let count = 0;

    // keep track of results count
    this.state.results.forEach(item => {
      count += item.length;
    });

    // Update state
    this.setState({ results: response, resultCount: count });
  }

  setSearch = async e => {
    // Set search
    this.setState({
      query: e.target.value
    });

    // reset if less than 3 characters
    if (e.target.value.length < 4) {
      this.setState({ results: new Map(), count: 0 });
      return;
    }

    // if greater than 3 characters, execute search
    this.delayedSearch(this.state.query);
  };

  render() {
    return (
      <div className="gametime-main">
        <div className="search-container">
          <img className="logo" alt="GameTime Logo" src={logo} />
          <div className="search">
            <SearchBox
              value={this.state.query}
              onSearch={this.setSearch}
              ref={this.searchBoxInput}
            />
            {this.state.query.length > 2 && (
              <SearchResults results={this.state.results} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
