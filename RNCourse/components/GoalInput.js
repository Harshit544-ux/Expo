import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // Handler for text input changes
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <>
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
        </>
    )

}

export default GoalInput;

const styles = StyleSheet.create({
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
})