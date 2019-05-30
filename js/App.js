import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext";
import client from "./config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <FavesProvider> */}
        <RootStackNavigator />
        {/* </FavesProvider> */}
      </ApolloProvider>
    );
  }
}
