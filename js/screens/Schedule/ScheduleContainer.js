import React, { Component } from "react";
import { Text } from "react-native";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FavesContext } from "../../context/FavesContext";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      // <FavesContext.Consumer>
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Text>Loading...</Text>; // replace by Loader component
          if (data) {
            return <Schedule sessions={data.allSessions} />;
          }
        }}
      </Query>
      // </FavesContext.Consumer>
    );
  }
}

const GET_SESSION_ITEMS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
      id
      title
      location
      description
      speaker {
        id
        name
        bio
        image
        url
      }
      startTime
    }
  }
`;

export default ScheduleContainer;
