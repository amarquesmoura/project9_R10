import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...theme.container
  },
  sectionHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.colors.lightGrey
  },
  separator: {
    borderBottomColor: "#999",
    borderBottomWidth: 1
  }
});

export default styles;
