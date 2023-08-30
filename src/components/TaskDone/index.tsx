import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type props = {
  taskText: string;
  onRemove: () => void;
  onChange: () => void;
};

export default function TaskDone({ taskText, onRemove, onChange }: props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={onChange}>
            <Image source={require("../../../assets/checkbox-checked.png")} />
          </TouchableOpacity>

          <Text style={styles.textDone}>{taskText}</Text>

          <TouchableOpacity onPress={onRemove}>
            <Image source={require("../../../assets/trash-red.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
