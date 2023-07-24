import React, { Component } from "react";
import Item from "../Item/index";

export default class List extends Component {
  render() {
    const { todos, upodateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => {
          return (
            <Item
              {...todo}
              upodateTodo={upodateTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    );
  }
}
