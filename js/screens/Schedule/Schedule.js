import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ sessions, faveIds }) => {
  return <SessionList sessions={sessions} faveIds={faveIds} />;
};

export default Schedule;
