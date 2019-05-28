import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";

import client from "./config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
