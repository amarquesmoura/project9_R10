import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Map = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Map feature is coming soon...</Text>
    </View>
  );
};

Map.propTypes = {
  data: PropTypes.object
};

export default Map;
