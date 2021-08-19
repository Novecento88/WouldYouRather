import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
    };
  }

  handleOptionChange = (event) => {
    this.setState(() => ({
      answer: event.target.value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { answer } = this.state;
    const { question } = this.props;

    if (answer === null) {
      return;
    }

    const { dispatch } = this.props;
    dispatch(handleAddAnswer(question.id, answer));

    this.props.history.push(`/question-results/${question.id}`);
  };

  render() {
    const { question } = this.props;

    return (
      <Box
        display="flex"
        flexDirection="column"
        border={1}
        padding={2}
        maxWidth={650}
        margin="auto"
        mt={4}
      >
        <h3>Would you rather...</h3>
        <form
          width="100%"
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <Box display="flex" flexDirection="column" width="100%">
            <FormControl component="fieldset">
              <RadioGroup name="options" onChange={this.handleOptionChange}>
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={`...${question.optionOne.text}`}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={`...${question.optionTwo.text}`}
                />
              </RadioGroup>
              <Box display="flex" py={2} width="100%">
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  py={2}
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </form>
      </Box>
    );
  }
}

function mapStateToProps({ questions }, props) {
  const { questionID } = props.match.params;
  const question = questions[questionID];

  return {
    question: question,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
