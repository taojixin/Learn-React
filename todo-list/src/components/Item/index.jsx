import React, { Component } from "react";

export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return (e) => {
      this.setState({ mouse: flag });
    };
  };
  handleChange = (id) => {
    return (e) => {
      this.props.upodateTodo(id, e.target.checked);
    };
  };
  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChange(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
