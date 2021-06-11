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

class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: null,
    };
  }
  handleOptionChange = (event) => {
    console.log("SELECTED OPTION: ", event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT VALUE: ", event.target.value);

    const { vote } = this.state;
  };

  render() {
    console.log("PROPS: ", this.props);
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
        <FormControl component="fieldset" onSubmit={this.handleSubmit}>
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
          <Box py={2}>
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
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { questionID } = props.match.params;
  console.log("ID: ", questionID);
  const question = questions[questionID];

  return {
    question: question,
  };
}

export default connect(mapStateToProps)(QuestionPage);
