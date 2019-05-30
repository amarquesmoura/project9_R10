import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import { Text } from "react-native";
import { formatSessionData } from "../../helpers";
import gql from "graphql-tag";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    const id = this.props.navigation.getParam("id");
    return (
      <Query variables={{ id }} query={GET_SESSION_DETAILS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>Loading...</Text>; // replace by Loader component
          return (
            <Session
              session={data.session}
              navigation={this.props.navigation}
              //faveIs={faveIds}
              //addFaveSession={addFaveSession}
              //removeFaveSession={removeFaveSession}
            />
          );
        }}
      </Query>
    );
  }
}

const GET_SESSION_DETAILS = gql`
  query session($id: ID!) {
    Session(id: $id) {
      description
      location
      speaker {
        bio
        image
        name
        url
      }
      startTime
      title
    }
  }
`;

export default SessionContainer;
