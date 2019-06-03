import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...theme.container,
    padding: 10
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
    padding: 20,
    width: "100%"
  },
  paragraph: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20
  },
  heading: {
    fontSize: 24
  },
  conduct: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default styles;
