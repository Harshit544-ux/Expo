import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Harshit Srivastava welcome to React Native</Text>
      <Text>Lets start building your first app!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:20,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#ffffff',
    borderWidth:2,
    borderColor:"red",
    margin:20
  
  },
});
