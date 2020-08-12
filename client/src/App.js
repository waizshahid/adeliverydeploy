import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Chart } from "react-chartjs-2";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import "react-perfect-scrollbar/dist/css/styles.css";
import axios from "axios";

import Routes from "./Routes";

axios.defaults.baseURL = "http://localhost:5000";

const browserHistory = createBrowserHistory();
const _ = require("lodash");

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
