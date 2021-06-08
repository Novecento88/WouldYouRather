import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Polls</h3>
        <div>
          {this.props.questionsIds.map((id) => (
            <li key={id}>
              <div>Question ID: {id}</div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Home);
