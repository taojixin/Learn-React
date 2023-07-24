import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
      (res) => {
        this.props.updateAppState({ isLoading: false, users: res.data.items });
      },
      (err) => {
        this.props.updateAppState({ isLoading: false, err: "请求出错" });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
