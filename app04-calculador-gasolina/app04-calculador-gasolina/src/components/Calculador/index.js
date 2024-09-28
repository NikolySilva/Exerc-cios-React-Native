import{View, Text, Pressable, TextInput, Image} from 'react-native';
import{useState} from 'react';

import {styles} from './styles'

function Calculador(){
  const [cont, setCont] = useState('') 
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')

  function verifica(){
    if (alcool === '' || gasolina === '' || alcool <= 0 || gasolina <= 0){
      alert('Favor digitar os valores válidos!')
      return;
    }
    resp = (alcool / gasolina)
    if(resp > 0.7){
      setCont('A gasolina é melhor!')
    }
    else{
      setCont('O Álcool é melhor!')
    }
    
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Álcool ou Gasolina?</Text>

        <Image source={{ uri: 'https://www.yukthiya.lk/wp-content/uploads/2024/05/NW02-14.jpg'}} style={styles.image} />
        
        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={setAlcool}
          placeholderTextColor="#888888"
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={setGasolina}
          placeholderTextColor="#888888"
        />

        <Pressable style={styles.button} onPress={() => verifica()}>
          <Text style={styles.buttonText}>Verificar</Text>
        </Pressable>

        <Text style={styles.titulo}> {cont} </Text>
      </View>
  )
}

export default Calculador