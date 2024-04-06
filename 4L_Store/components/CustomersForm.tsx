import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import useBasketStore from '../store/basketStore';

const CustomerForm = ({navigation}) => {

  //Implementazione della pagina relativa al pagamento dove sono presenti alcuni controlli sulla validità dei campi in handleFormSubmit
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [otherField, setOtherField] = useState('');
  const [cvc,setCvc]= useState('');
  const [ExpirationDate,setExpirationDate]= useState('');
  const [cardHolder,setCardHolder]= useState('');
  const {clearCart} = useBasketStore();
  
  const handleFormSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!creditCard.trim() || isNaN(creditCard)) {
      Alert.alert('Error', 'Please enter a valid credit card number');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Other field validations can be added similarly

    // If all validations pass, you can proceed with submitting the form
    // For demonstration purposes, let's just log the data

    else{
      (navigation as any).navigate('Greetings');
      clearCart();
    }

  };
   
  const onButtonPress=()=>
      {
        navigation.goBack();
      };
      
  const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

  return (
    <View>
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity  onPress={onButtonPress}>
      <Image source={require('../images/left-arrow.png')} style={styles.backButton} ></Image>
    </TouchableOpacity>
    <Text style={styles.headerText}>CHECKOUT</Text> 
      </View>
       
     
      <Text style={styles.text}>Personal Details</Text>
     <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}/>
        
        <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={text => setSurname(text)}/>

        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}/>
        
        <Text style={styles.text}>Payment Details</Text>
        <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        keyboardType="numeric"
        value={creditCard}
        onChangeText={text => setCreditCard(text)}/>

        <TextInput
        style={styles.input}
        placeholder="Cvc"
        keyboardType="numeric"
        value={cvc}
        onChangeText={text => setCvc(text)}/>

       <TextInput
        style={styles.input}
        placeholder="Expiration Date (MM/YYYY)"
        keyboardType="numeric"
        value={ExpirationDate}
        onChangeText={text => setExpirationDate(text)}/>
        
        <TextInput
        style={styles.input}
        placeholder="Card Holder"
        value={cardHolder}
        onChangeText={text => setCardHolder(text)}/>
        
        <TouchableOpacity style={styles.footerBtn} onPress={handleFormSubmit}>
                <Text style={styles.text}>Send Order</Text>
        </TouchableOpacity>

      </ScrollView>
       
      

        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding:8
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
  },
headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  flex:1,
  textAlign:'center',
  color:'black'
},
backButton:
{
   width:28,
   height:28,
},
text:
{
  fontSize:20,
  color:'black',
  paddingTop:5,
  paddingBottom:5,
  fontWeight:'bold',
  padding:8
},
 footerBtn:
      {
         backgroundColor:'rgb(14,253,200)',
         padding:16,
         borderRadius:8,
         alignItems:'center',
      },
});

export default CustomerForm;


