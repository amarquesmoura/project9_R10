import React from "react";
import { View } from "react-native";
import SessionList from "../../components/SessionList";
import styles from "./styles";

const Faves = ({ favedSessions, faveIds }) => {
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
