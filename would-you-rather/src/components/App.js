import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Home from "./Home";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  handleTabChange = (event, value) => {
    this.setState({
      selectedTab: value,
    });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={this.state.selectedTab}
            onChange={this.handleTabChange}
            aria-label="navigation tabs"
            centered
          >
            <Tab label="HOME" />
            <Tab label="NEW QUESTION" />
            <Tab label="LEADER BOARD" />
            <Tab label="HELLO, USER" />
            <Tab label="LOGOUT" />
          </Tabs>
        </AppBar>
        <div>{this.props.loading === true ? null : <Home />}</div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
