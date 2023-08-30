import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from "react-native";

import { styles } from "./styles";
import TaskDone from "../../components/TaskDone";
import NewTask from "../../components/NewTask";
import { useEffect, useState } from "react";

export type task = {
  id: number;
  done: boolean;
  taskText: string;
};

export default function Home() {
  const [list, setList] = useState<task[]>([]);
  const [tasksDone, setTasksDone] = useState<number>(0);
  const [taskText, setTaskText] = useState<string>("");
  const [idNumber, setIdNumber] = useState<number>(1);

  useEffect(() => {
    countTasksDone();
  }, [list]);

  function storeNewTask() {
    if (taskText.length < 1) {
      return Alert.alert(
        "Atenção !",
        "Você precisa escrever uma tarefa antes de adicionar."
      );
    }

    const new_task = {
      id: idNumber,
      done: false,
      taskText,
    };

    const new_array = [...list, new_task];

    setList(new_array);

    setTaskText("");

    setIdNumber(idNumber + 1);
  }

  function onRemove(task: task) {
    Alert.alert("Atenção!", "Você realmente deseja excluir esta tarefa ?", [
      {
        text: "Sim",
        onPress() {
          const new_list = list.filter((item) => item.id !== task.id);

          setList(new_list);
        },
      },
      { text: "Não" },
    ]);
  }

  function onChange(task: task) {
    const new_array = list.map((item) => {
      if (item.id === task.id) {
        return { ...item, done: !item.done };
      }

      return item;
    });

    setList(new_array);
  }

  function countTasksDone() {
    let count = 0;

    list.forEach((item) => {
      if (item.done) {
        count += 1;
      }
    });

    setTasksDone(count);
  }

  return (
    <View style={styles.backgroundBlack}>
      <View style={styles.backgroundGray}>
        <View style={styles.content}>
          <View style={styles.appNameContainer}>
            <Image source={require("../../../assets/rocket.png")} />
            <Text style={styles.appNameFirstPart}>to</Text>
            <Text style={styles.appNameSecondPart}>do</Text>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={"#808080"}
              style={styles.textBox}
              onChangeText={(text) => setTaskText(text)}
              defaultValue={taskText}
            />
            <TouchableOpacity style={styles.button} onPress={storeNewTask}>
              <Image source={require("../../../assets/add-default.png")} />
            </TouchableOpacity>
          </View>

          <View style={styles.countersContainer}>
            <View style={styles.createdContainer}>
              <Text style={styles.createdText}>Criadas</Text>
              <Text style={styles.counter}>{list.length} </Text>
            </View>
            <View style={styles.concludeContainer}>
              <Text style={styles.concludeText}>Concluídas</Text>
              <Text style={styles.counter}>{tasksDone}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {list.length ? (
            <View style={styles.TasksContainer}>
              <FlatList
                data={list}
                renderItem={({ item }) =>
                  item.done ? (
                    <TaskDone
                      key={item.id}
                      taskText={item.taskText}
                      onRemove={() => onRemove(item)}
                      onChange={() => onChange(item)}
                    />
                  ) : (
                    <NewTask
                      key={item.id}
                      taskText={item.taskText}
                      onRemove={() => onRemove(item)}
                      onChange={() => onChange(item)}
                    />
                  )
                }
              />
            </View>
          ) : (
            <View style={styles.noTasksContainer}>
              <Image source={require("../../../assets/clipboard.png")} />
              <Text style={styles.noTaskTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.noTaskText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
