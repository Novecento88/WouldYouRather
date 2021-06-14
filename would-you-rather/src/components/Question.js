import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Box, Avatar } from "@material-ui/core";

class Question extends Component {
  handleGoToQuestionPage = (event, questionID) => {
    event.preventDefault();

    if (this.props.answered) {
      this.props.history.push(`/question-results/${questionID}`);
      return;
    }
    this.props.history.push(`/question/${questionID}`);
  };

  render() {
    const { question, userAvatar } = this.props;

    if (question === null) {
      return null;
    }

    return (
      <Box border={1} padding={2} maxWidth={580} margin="auto" mt={4}>
        <Box display="flex" flexDirection="row">
          <Avatar
            display="flex"
            alignself="flex-start"
            style={{ height: "60px", width: "60px" }}
            width={42}
            src={userAvatar}
            alt={`Avatar representing ${question.author}`}
          />
          <Box display="flex" flexDirection="column" mb={2} ml={6} width="100%">
            <h2>Would you rather</h2>
            <div>{`...${question.optionOne.text}...`}</div>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          mt={2}
          fullWidth
          onClick={(event) => this.handleGoToQuestionPage(event, question.id)}
        >
          View Poll
        </Button>
      </Box>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const votes = question.optionOne.votes.concat(question.optionTwo.votes);
  const answered = votes.includes(authedUser);

  if (question === null) {
    console.log("NULL!");
    return null;
  }
  const userAvatar = `${users[question.author].avatarURL}`;

  return {
    question,
    userAvatar,
    answered,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
