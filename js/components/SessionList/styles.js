import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...theme.container
  },
  sectionHeader: {
    padding: 5,
    backgroundColor: theme.colors.lightGrey,
    fontFamily: theme.fontRegular
  },
  separator: {
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1
  }
});

export default styles;
