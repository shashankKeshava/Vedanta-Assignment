import React from "react";
import "./styles.css";

class GitHubMock extends React.Component {
  async fetchProfieData() {
    const data = await fetch("https://api.github.com/users/supreetsingh247");
    console.log(data);
  }
  render() {
    this.fetchProfieData();
    return "Hello";
  }
}

export default GitHubMock;
