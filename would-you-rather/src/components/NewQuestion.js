import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Box, Tabs, Tab } from "@material-ui/core";

class NewQuestion extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    const text = event.target.useDebugValue(
      this.setState(() => ({
        text,
      }))
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { text } = this.state;
  };

  render() {
    return (
      <Box border={1} padding={2} maxWidth={650} margin="auto">
        <h3>Create New Question</h3>
        <h1>Complete the question:</h1>
        <h2>Would you rather...</h2>
      </Box>
    );
  }
}

export default connect()(NewQuestion);
