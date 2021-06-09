import React, { Component } from "react";
import "./Question.css";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    const { question, userAvatar } = this.props;

    if (question === null) {
      return null;
    }

    return (
      <div className="question">
        <img
          className="avatar"
          src={userAvatar}
          alt={`Avatar representing ${question.author}`}
        />
        <div className="question-info">
          <span>Would you rather</span>
          <div>{`...${question.optionOne.text}...`}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];

  if (question === null) {
    console.log("NULL!");
    return null;
  }
  const userAvatar = `${users[question.author].avatarURL}`;

  return {
    question,
    userAvatar,
  };
}

export default connect(mapStateToProps)(Question);
