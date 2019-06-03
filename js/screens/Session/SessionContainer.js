import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import { Text } from "react-native";
import { formatSessionData } from "../../helpers";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    const id = this.props.navigation.getParam("id");
    return (
      <FavesContext.Consumer>
        {({ faveIds, addFaveSession, removeFaveSession }) => (
          <Query variables={{ id }} query={GET_SESSION_DETAILS}>
            {({ loading, data }) => {
              if (loading || !data) return <Text>Loading...</Text>; // replace by Loader component
              return (
                <Session
                  session={data.Session}
                  navigation={this.props.navigation}
                  faveIds={faveIds}
                  addFaveSession={addFaveSession}
                  removeFaveSession={removeFaveSession}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

const GET_SESSION_DETAILS = gql`
  query session($id: ID!) {
    Session(id: $id) {
      id
      description
      location
      speaker {
        id
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
