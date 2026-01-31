import { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList
}
    from 'react-native';

// import custom components
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

function TodoList() {

    const [courseGoals, setCourseGoals] = useState([]);

    // Handler for adding a new goal
    function addGoalHandler(enteredGoalText) {

        // Update state and clear the input field
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                {/* Input Area */}
                <GoalInput onAddGoal={addGoalHandler} />

                {/* List Area */}
                <View style={styles.goalContainer}>
                 {/* 
                    ScrollView allows scrolling when content overflows the screen , 
                    basically in react native we explicitly need to tell that this area is scrollable
                    
                    there is one issue - using scrollview is that it renders all the items at once 
                    so if we have large number of items it can impact performance
                    in that case its better to use FlatList component which only renders items that are currently visible on the screen

                */}

                {/* FlatList - optimize the list */}
                    <FlatList contentContainerStyle={{ paddingBottom: 50 }}
                        data={courseGoals}
                        renderItem={
                            (itemData) => {
                                return <GoalItem text={itemData.item.text} />
                            }}

                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
            </View>
        </>
    )

}

export default TodoList;

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
})