import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  modalContainer: {
    ...theme.container,
    backgroundColor: "black"
  },
  modalBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%"
  },
  closeIcon: {
    color: "white",
    position: "absolute",
    left: 10
  },
  modalTitle: {
    color: "white",
    fontFamily: theme.fontFamily,
    fontSize: 20
  },
  scrollView: {
    alignItems: "center",
    width: "90%",
    borderRadius: 5,
    backgroundColor: "white"
  },
  speakerPic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20
  },
  name: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "800",
    fontFamily: theme.fontFamily
  },
  bio: {
    fontSize: 16,
    fontFamily: theme.fontFamily,
    padding: 15
  },
  button: {
    height: 40,
    width: "80%",
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30
  },
  buttonText: {
    fontFamily: "Montserrat",
    color: "white",
    fontSize: 15,
    padding: 10
  }
});

export default styles;
