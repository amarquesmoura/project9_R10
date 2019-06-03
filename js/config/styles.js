import { Platform } from "react-native";

const theme = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  colors: {
    mediumGrey: "#999999",
    lightGrey: "#e6e6e6",
    blue: "#8797D6",
    purple: "#9963ea",
    red: "#cf392a"
  },
  fontFamily: Platform.OS === "android" ? "Montserrat-Regular" : "Montserrat"
};

export default theme;
