import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: "justify",
  },
  textDone: {
    flex: 1,
    color: "#808080",
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: "justify",
    textDecorationLine: "line-through",
  },
});
