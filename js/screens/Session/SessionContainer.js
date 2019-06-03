import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import Loader from "../../components/Loader";

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
              if (loading || !data) return <Loader />;
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
