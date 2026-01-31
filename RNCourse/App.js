import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // Handler for text input changes
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Handler for adding a new goal
  function addGoalHandler() {
    // If input is empty, don't add anything
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    // Update state and clear the input field
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appcontainer}>
      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          //for the input text we need property called onChangeText 
          onChangeText={goalInputHandler}
          value={enteredGoalText} // Important: binds state back to input
        />
        <Button title="Add Goal" 
        // when we press the button we want to call addGoalHandler function
        onPress={addGoalHandler} />
      </View>

      {/* List Area */}
      <View style={styles.goalContainer}>
        {/* Map through courseGoals array and display each goal */}
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalsList}>
            <Text style={styles.goalsText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
    marginTop: 20, // Added space so list doesn't touch the line
  },
  goalsList: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalsText: {
    color: 'white',
    fontSize: 16,
  },
});