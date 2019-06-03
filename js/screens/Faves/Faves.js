import React from "react";
import SessionList from "../../components/SessionList";

const Faves = ({ favedSessions, faveIds }) => {
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
