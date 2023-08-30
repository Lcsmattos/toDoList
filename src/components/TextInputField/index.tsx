import { TextInput } from "react-native";

import { styles } from "./styles";

export default function TextInputField() {
  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={"#808080"}
      style={styles.textBox}
    />
  );
}
