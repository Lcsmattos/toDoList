import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundBlack: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    zIndex: 999,
  },

  backgroundGray: {
    width: "100%",
    height: "23%",
    backgroundColor: "#0D0D0D",
    zIndex: 9999,
  },

  content: {
    width: width,
    height: height,
    marginTop: 40,
  },

  appNameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 50,
  },

  appNameFirstPart: {
    color: "#4EA8DE",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 10,
  },

  appNameSecondPart: {
    color: "#5E60CE",
    fontSize: 35,
    fontWeight: "bold",
  },

  textInputContainer: {
    width: "90%",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  textBox: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "#333333",
    color: "#fff",
    padding: 16,
    borderRadius: 8,
    borderColor: "#0D0D0D",
  },

  button: {
    marginLeft: 5,
  },

  countersContainer: {
    width: "90%",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },

  createdContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  concludeContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  createdText: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 15,
  },

  concludeText: {
    color: "#5E60CE",
    fontWeight: "bold",
    fontSize: 15,
  },

  counter: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 3,
  },

  divider: {
    borderBottomColor: "#333333",
    borderBottomWidth: 2,
    width: "90%",
    marginHorizontal: 20,
  },

  TasksContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  noTasksContainer: {
    flex: 0.5,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  noTaskTextBold: {
    marginTop: 16,
    fontSize: 15,
    color: "#808080",
    fontWeight: "bold",
  },

  noTaskText: {
    fontSize: 15,
    color: "#808080",
  },

  flatlist: {},
});
