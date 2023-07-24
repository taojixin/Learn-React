import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，请输入关键字搜索</h2>
        ) : isLoading ? (
          <h2>loading....</h2>
        ) : err !== "" ? (
          <h2>{err}</h2>
        ) : (
          this.props.users?.map((user) => {
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
