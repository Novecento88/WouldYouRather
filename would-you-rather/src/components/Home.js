import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Polls</h3>
        <div>
          {this.props.questionsIds.map((id) => (
            <li key={id}>
              <Question id={id} />
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

// Might be useful later
// const votes = question.optionOne.votes.concat(question.optionTwo.votes);
// const answered = `${votes.includes(authedUser)}`;
