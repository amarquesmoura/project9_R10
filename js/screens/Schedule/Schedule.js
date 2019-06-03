import React from "react";
import SessionList from "../../components/SessionList";

const Schedule = ({ sessions, faveIds }) => {
  return <SessionList sessions={sessions} faveIds={faveIds} />;
};

export default Schedule;
