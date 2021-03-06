import React, { Component } from "react";
import Faves from "./Faves";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_SESSION_ITEMS}>
            {({ loading, error, data }) => {
              if (loading || !data) return <Loader />;
              if (data) {
                const favedSessions = data.allSessions.filter(session => {
                  return faveIds.includes(session.id);
                });

                return (
                  <Faves favedSessions={favedSessions} faveIds={faveIds} />
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

export default FavesContainer;
