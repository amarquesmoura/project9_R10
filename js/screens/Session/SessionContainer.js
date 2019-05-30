import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import { formatSessionData } from "../../helpers";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>Loading...</Text>; // replace by Loader component
          return (
            <Session
              data={formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
