import React, { Component } from "react";
import { Text } from "react-native";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import Loader from "../../components/Loader";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_SESSION_ITEMS}>
            {({ loading, error, data }) => {
              if (loading || !data) return <Loader />;
              if (data) {
                return (
                  <Schedule sessions={data.allSessions} faveIds={faveIds} />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
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
