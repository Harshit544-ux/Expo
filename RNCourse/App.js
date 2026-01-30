import { StyleSheet, Text, View,Button, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     <Text style={{color:"magenta",fontSize:30,marginBottom:10}}>Core Component</Text>   

      {/* ---- Core Component ----  */}

       {/* Button */}
       <Button title='click me' onPress={()=>{Alert.alert("click me")}}/>

        {/*Text  */}
        <Text style={styles.text2}>This is Text Component</Text>
        <Text style={styles.text3}>This is Text Component with border</Text>
        <Text style={styles.text1}>This is Text Component with blue color</Text>
      
       {/* View */}
        <View>
          <Text>This is View Component</Text>
        </View>

        {/* TextInput */}
        <TextInput style={styles.textInput} placeholder='Enter your Name' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:30,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#ffffff',
    borderWidth:2,
    borderColor:"red",
    margin:20
  
  },
  text1:{
    color:"blue",
    fontSize:20
  },
  text2:{
    color:"red",
    borderWidth:2,
    borderColor: "black",
    padding:10,
    marginVertical:2
  },
  text3:{
     color:"green",
     borderWidth:5 ,
     borderColor: "red" ,
     padding:10 ,
     marginVertical:10 
  },
  textInput:{
    borderWidth:2,
    borderColor:"black",
    padding:10,
    marginTop:10,
    width:200
  }

 

});
