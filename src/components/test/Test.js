import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  //ajax calls
  componentDidMount() {
    console.log("did mount...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // Next 3 are being depricated
  // componentWillMount () {
  //     console.log("will mount")
  // }

  // UNSAFE_componentWillUpdate() {
  //     console.log("Renders after update of the page");
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps");
  // }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   static getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("snapshotbefore");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
        <p>"{body}</p>
      </div>
    );
  }
}

export default Test;
