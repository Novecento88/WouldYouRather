import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Grid } from "@material-ui/core";
import User from "./User";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <Box maxWidth={650} margin="auto" mt={4}>
        <Grid container direction="column" spacing={3}>
          {Object.keys(users).map((userID) => (
            <Grid item key={userID}>
              <User key={userID} user={users[userID]} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

function mapStateToProps({ users }) {
  const usersWithScore = Object.keys(users).map((userID) => {
    const user = users[userID];
    const answeredQuestionsCount = Object.keys(user.answers).length;
    const createdQuestionsCount = user.questions.length;
    user.score = answeredQuestionsCount + createdQuestionsCount;
    return user;
  });

  usersWithScore.sort((firstElement, secondElement) => {
    return secondElement.score - firstElement.score;
  });

  return {
    users: usersWithScore,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
