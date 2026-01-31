import { View, StyleSheet } from "react-native";
import TodoList from "./Screens/TodoList";

export default function App() {

  return (
    <View style={styles.container}>
      {/* render the TodoList Screen */}
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },


})