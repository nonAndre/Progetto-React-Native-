import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const Greetings = ({ navigation }) => {
 

  //Pagina che ha la funzione di ringraziare il cliente e portare lo stesso in home dopo aver concluso la transazione
  const onButtonPress=()=>
      {
        navigation.goBack();
      };

  return (
    <View style={styles.container}>

      <Image
        source={require('../images/Logo.png')}
        style={styles.image}
      />
      <Text style={styles.headerText}>Thank You!</Text>
      <Text style={styles.subText}>
        We appreciate your purchase and hope you enjoy it.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.dispatch(CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
      }))}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    height:60
  },
  backButton:
     {
        width:28,
        height:28,
     },
});

export default Greetings;


