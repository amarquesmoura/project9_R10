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
    paddingTop: 10,
    paddingBottom: 20,
    width: "100%"
  },
  info: {
    padding: 0,
    width: "100%"
  },
  paragraph: {
    fontFamily: theme.fontLight,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 20
  },
  heading: {
    fontFamily: theme.fontRegular,
    fontSize: 24,
    paddingBottom: 5
  },
  conduct: {
    fontFamily: theme.fontLight,
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
    fontFamily: theme.fontLight,
    color: "black"
  }
});

export default styles;
