import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     <Text style={{color:"purple",fontSize:30,marginBottom:10}}>Inline Css</Text>

      {/* {How to write inline styles in React Native}

       // syntax :  style={ { key1:value, key2:value } }

       //  eg:  <View>
                  <Text style={ {color:"blue", fontSize:20} }>Some text</Text>
                </View>
      
      
      */}

      <View>
       {/* {inline css} */}
         <Text style={{color:"blue",fontSize:20}}>Another piece of text</Text>
      </View>

        {/* {inline css} */}
      <View>
        <Text style={{color:"red",borderWidth:2 ,borderColor: "black" ,padding:10,marginVertical:2} }>Yet Another piece of </Text>
      </View>


        <View>
          <Text style={{color:"green",borderWidth:5 ,borderColor: "red" ,padding:10,marginVertical:10} }>React Native Course </Text>
       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:20,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#ffffff',
    borderWidth:2,
    borderColor:"red",
    margin:20
  
  },
});
