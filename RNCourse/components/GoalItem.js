import { View, Text,  StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
        <>
            {/* List Area */}
               <View style={styles.goalsList}>
                 <Text style={styles.goalsText} >{props.text}</Text>
              </View>

        </>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
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