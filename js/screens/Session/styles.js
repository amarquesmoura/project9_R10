import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...theme.container,
    alignItems: "flex-start",
    padding: 10
  },
  locationAndFaveContainer: {
    ...theme.container,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
    width: "100%"
  },
  location: {
    fontSize: 16,
    color: theme.colors.mediumGrey,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: theme.fontRegular
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    fontFamily: theme.fontRegular
  },
  time: {
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.colors.red,
    fontSize: 16,
    fontFamily: theme.fontRegular
  },
  description: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: theme.fontLight
  },
  presented: {
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.colors.mediumGrey,
    fontSize: 20,
    fontFamily: theme.fontRegular
  },
  speakerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  speakerPic: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  speaker: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: theme.fontRegular
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.lightGrey,
    marginTop: 20,
    marginBottom: 20
  },
  gradient: {
    height: 40,
    width: "60%",
    borderRadius: 20,
    margin: 20,
    alignSelf: "center",
    justifyContent: "center"
  },
  button: {
    padding: 10
  },
  buttonLabel: {
    color: "white",
    fontFamily: theme.fontRegular,
    fontSize: 16,
    textAlign: "center"
  }
});

export default styles;
