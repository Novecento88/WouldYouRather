import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Box, Tabs, Tab, TextField, Button } from "@material-ui/core";
import { handleAddQuestion } from "../actions/questions"

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (event) => {
    const textFieldID = event.target.id
    const value = event.target.value

    console.log("TARGET: ", event.target.id)

    switch (textFieldID) {
      case "option-one-text-field":
        this.setState(() => ({
          optionOne: value,
        }))
        break
      case "option-two-text-field":
        this.setState(() => ({
          optionTwo: value,
        }))
        break
      default:
        console.log(`ERROR! Wrong TextField ID: ${textFieldID} with text: ${value}`)
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { optionOne, optionTwo } = this.state;

    const { dispatch } = this.props
    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }))
  };

  render() {
    return (
      <Box border={1} padding={2} maxWidth={650} margin="auto" mt={4}>
        <h3>Create New Question</h3>
        <h1>Complete the question:</h1>
        <h2>Would you rather...</h2>
        <div display="flex" flex-direction="column">
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <Box margin={2}>
              <TextField id="option-one-text-field" label="First option" value={this.state.optionOne} variant="outlined" onChange={this.handleChange} multiline fullWidth />
            </Box>
            <Box margin={2}>
              <TextField id="option-two-text-field" label="Second option" value={this.state.optionTwo} variant="outlined" onChange={this.handleChange} multiline fullWidth />
            </Box>
            <Box textAlign='center'>
              <Button variant="contained" type="submit" color="primary">
                Submit
            </Button>
            </Box>
          </form>
        </div>
      </Box>
    );
  }
}

export default connect()(NewQuestion);
