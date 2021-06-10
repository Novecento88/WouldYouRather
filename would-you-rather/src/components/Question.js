import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core"
import { withRouter } from "react-router-dom";
import { Box, Avatar } from "@material-ui/core"

class Question extends Component {


  handleGoToQuestionPage = (event, questionID) => {
    event.preventDefault()

    this.props.history.push(`/question/${questionID}`)
  }

  render() {
    const { question, userAvatar } = this.props;

    if (question === null) {
      return null;
    }

    return (
      <Box border={1} padding={2} maxWidth={580} margin="auto" mt={4}>
        <Box flexDirection="row">
          <Avatar
            src={userAvatar}
            alt={`Avatar representing ${question.author}`}
          />
          <div>
            <h2>Would you rather</h2>
            <div>{`...${question.optionOne.text}...`}</div>
          </div>
        </Box>
        <Button fullWidth onClick={(event) => this.handleGoToQuestionPage(event, question.id)}>View Poll</Button>
      </Box>
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

export default withRouter(connect(mapStateToProps)(Question));
