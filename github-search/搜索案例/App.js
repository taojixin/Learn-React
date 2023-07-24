import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };
  saveUsers = (users) => {
    console.log(users);
    this.setState({ users });
  };
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
