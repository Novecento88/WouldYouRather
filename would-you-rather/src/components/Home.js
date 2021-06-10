import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Box, Tabs, Tab } from "@material-ui/core";
import Question from "./Question";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "answered",
    };
  }

  handleTabChange = (event, value) => {
    this.setState({
      selectedTab: value,
    });
  };

  render() {
    const questionIds = this.props.questionIds[this.state.selectedTab];

    return (
      <div>
        <Box border={1} padding={2} maxWidth={650} margin="auto" mt={4}>
          <Tabs
            value={this.state.selectedTab}
            onChange={this.handleTabChange}
            aria-label="navigation tabs"
            centered
          >
            <Tab label="ANSWERED" value={"answered"} />
            <Tab label="UNANSWERED" value={"unanswered"} />
          </Tabs>
          <Grid container direction="column" spacing={3}>
            {questionIds.map((id) => (
              <Grid item key={id}>
                <Question id={id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const answered = Object.keys(questions).filter((key) => {
    const question = questions[key];
    const votes = question.optionOne.votes.concat(question.optionTwo.votes);
    return votes.includes(authedUser);
  });

  const unanswered = Object.keys(questions).filter((key) => {
    const question = questions[key];
    const votes = question.optionOne.votes.concat(question.optionTwo.votes);
    return !votes.includes(authedUser);
  });

  return {
    questionIds: {
      answered,
      unanswered,
    },
  };
}

export default withRouter(connect(mapStateToProps)(Home));
