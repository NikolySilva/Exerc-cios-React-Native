import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import {styles} from './styles'

function Multiplicador(){
  const [resultado, setResultado] = useState()
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira o primeiro número"
          onChangeText={setInput1}
          keyboardType='numeric'
          placeholderTextColor="#aaaaaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira o segundo número"
          onChangeText={setInput2}
          keyboardType='numeric'
          placeholderTextColor="#aaaaaa"
        />

        <Button title='Calcular' color='yellow' onPress={() => setResultado(input1 * input2)}/>

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Multiplicador