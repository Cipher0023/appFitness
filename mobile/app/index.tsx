import { Text, View, Image, StyleSheet, Pressable} from "react-native";
import {colors} from '../constants/colors'
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View style= {styles.container}>
      <Image
        source={require('../assets/images/logoMid.png')}
      />

      <Text style={styles.title}>
        Exercicíc<Text style={{color: colors.white}}>IA</Text>
      </Text>

      <Text style={styles.text}>seu app de dietas feitas por IA's</Text>

      <Link href="/step"asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight:15,



  },
  title:{
    fontSize:36,
    fontWeight: 'bold',
    color:colors.green
  },

  text:{
    fontSize: 16,
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop:10,
    marginBottom:10
  },

  button:{
    backgroundColor: colors.blue,
    width:'100%',
    height:40,
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight:15,
  },

  buttonText:{
    color: colors.white,
    fontSize:20,
    fontWeight:'bold'
  }


})
