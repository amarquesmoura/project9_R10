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
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.lightGrey,
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  },
  copyrightContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },
  copyright: {
    color: "black"
  }
});

export default styles;
