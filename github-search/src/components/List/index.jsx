import React, { Component } from "react";
import "./index.css";
import PubSub from "pubsub-js";

export default class List extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };
  componentDidMount() {
    PubSub.subscribe("tjx", (_, data) => {
      console.log(_,data);
      this.setState(data);
      console.log(this.state.users);
    });
  }
  render() {
    // const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {this.setState.isFirst ? (
          <h2>欢迎使用，请输入关键字搜索</h2>
        ) : this.setState.isLoading ? (
          <h2>loading....</h2>
        ) : this.setState.err !== "" ? (
          <h2>{this.setState.err}</h2>
        ) : (
          this.state.users?.map((user) => {
            return (
              <div className="card" key={user.login}>
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="profile"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
