import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
   const [enteredGoalText,setEnteredGoalText]=useState('')
  

   function goalInputHandler(enteredText){
       setEnteredGoalText(enteredText)
  

   }

   function addGoalHandler(){
    console.log(enteredGoalText);
   }


  return (
    <View style={styles.appcontainer}>

     {/* input and button */}
      <View style={styles.inputContainer}>

        <TextInput 
         style={styles.textInput} 
         placeholder='Your course goal!'
        //for the input text we need property called onChangeText  
         onChangeText={goalInputHandler}
         />

        <Button title='Add Goal'
        // when we press the button we want to call addGoalHandler function 
         onPress={addGoalHandler}
        />
      </View>

      {/* showing - list of data */}
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
   paddingTop:50,
   paddingHorizontal:16 


  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"80%",
    marginRight:8,
    padding:8

  },
  goalContainer:{
    flex:5
  }
  



});
