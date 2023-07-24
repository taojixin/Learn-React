import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll =(e) => {
    this.props.checkAllTodo(e.target.checked)
  }
  handleClearAll = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={doneCount === total && doneCount !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          已完成{doneCount} / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
      </div>
    );
  }
}
