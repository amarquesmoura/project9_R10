import React, { Component } from "react";
import { Text } from "react-native";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../helpers";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>Loading...</Text>; // replace by Loader component
          return <Schedule data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}

const GET_CONDUCT_ITEMS = gql`
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
