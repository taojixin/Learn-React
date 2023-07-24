import React from "react";
import Header from "./components/Header/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";
import "./App.css";

class App extends React.Component {
  // 初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: true },
    ],
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  upodateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    });
    this.setState({ todos: newTodos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List
          todos={todos}
          upodateTodo={this.upodateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} />
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
