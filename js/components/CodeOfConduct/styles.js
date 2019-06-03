import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  conductHeading: {
    flexDirection: "row",
    alignItems: "center"
  },
  conductTitle: {
    color: theme.colors.purple,
    fontFamily: theme.fontRegular,
    fontSize: 16
  },
  conductContainer: {
    padding: 20
  },
  conductDescription: {
    fontFamily: theme.fontRegular,
    fontSize: 16
  }
});

export default styles;
