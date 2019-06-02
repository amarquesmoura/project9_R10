import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  title: {
    paddingTop: 5,
    paddingBottom: 5
  },
  locationAndFaveContainer: {
    ...theme.container,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  location: {
    paddingTop: 5,
    paddingBottom: 5,
    color: theme.colors.mediumGrey
  }
});

export default styles;
