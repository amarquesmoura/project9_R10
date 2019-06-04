import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  title: {
    padding: 5,
    fontFamily: theme.fontRegular
  },
  locationAndFaveContainer: {
    ...theme.container,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5
  },
  location: {
    padding: 5,
    color: theme.colors.mediumGrey,
    fontFamily: theme.fontRegular
  }
});

export default styles;
