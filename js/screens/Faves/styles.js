import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...theme.container
  },
  message: {
    fontFamily: theme.fontRegular,
    fontSize: 16,
    textAlign: "center",
    color: theme.colors.mediumGrey
  }
});

export default styles;
