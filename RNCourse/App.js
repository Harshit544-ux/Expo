import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     <Text style={{color:"magenta",fontSize:30,marginBottom:10}}>StyleSheet Css</Text>

      {/* { How to write css  in StyleSheet }}

        ✅ StyleSheet kya hota hai? (Definition)

       -> StyleSheet React Native ka ek built-in API hai
       -> jiska use hum UI styles ko ek jagah define karne ke liye karte hain, 
       -> taaki code clean, reusable aur fast rahe.

        👉 React Native mein CSS file nahi hoti
        👉 Isliye styles JavaScript object ke form mein likhte hain
        👉 Aur StyleSheet.create() se define karte hain
      
        🔹 Syntax (Basic Structure) ---
            const styles = StyleSheet.create({
              styleName: {
                property: value,
              },
            });

      
      */}

       {/* Convert this inline css to stylesheet css */}
      <View>
       {/* {Stylesheet css} */}
         <Text style={styles.text1}>Another piece of text</Text>
      </View>

         {/* {Stylesheet css} */}
      <View>
        <Text style={styles.text2}>Yet Another piece of text </Text>
      </View>

         {/* {Stylesheet css} */}
        <View>
          <Text style={styles.text3}>React Native Course </Text>
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
  }
 

});
