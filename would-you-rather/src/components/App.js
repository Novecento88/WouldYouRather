import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "/",
    };
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  handleTabChange = (event, value) => {
    this.props.history.push(value);

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
            <Tab label="HOME" value="/" />
            <Tab label="NEW QUESTION" value="/new-question" />
            <Tab label="LEADER BOARD" value="/leader-board" />
            <Tab label="HELLO, USER" value="/user-profile" />
            <Tab label="LOGOUT" value="/logout" />
          </Tabs>
        </AppBar>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new-question" component={NewQuestion} />
          <Route path="/question/:questionID" component={QuestionPage} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default withRouter(connect(mapStateToProps)(App));

// Useful to check if user is authenticated
{
  /* {<div>{this.props.loading === true ? null : <Home />}</div>} */
}
