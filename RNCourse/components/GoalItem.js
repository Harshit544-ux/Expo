import { View, Text,  StyleSheet,Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <>
            {/* List Area */}
             <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
               <View style={styles.goalsList}>
                 <Text style={styles.goalsText} >{props.text}</Text>
               </View>
             </Pressable>

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