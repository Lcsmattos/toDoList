import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type props = {
  taskText: string;
  onRemove: () => void;
  onChange: () => void;
};

export default function NewTask({ taskText, onRemove, onChange }: props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={onChange}>
            <Image source={require("../../../assets/checkbox-unchecked.png")} />
          </TouchableOpacity>

          <Text style={styles.text}>{taskText}</Text>

          <TouchableOpacity onPress={onRemove}>
            <Image source={require("../../../assets/trash-default.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
