import{View, Text, Pressable, TextInput, Image} from 'react-native';
import{useState} from 'react';

import {styles} from './styles'

function Game(){
  const [resultado, setResultado] = useState('') 
  const [valorDigitado, setValorDigitado] = useState('')

  function jogo(){
    const valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const numeroDigitado = parseInt(valorDigitado);

    if(valid.includes(numeroDigitado)){
      randomNumber = parseInt(Math.random() * 10)
      mensagem = "Número aleatório: " + randomNumber

      if(randomNumber === numeroDigitado){
        mensagem += "\nMUITO BEM!"
      }
      else{
        mensagem += "\nNão foi dessa vez, tente novamente..."
      }

      setResultado(mensagem)
      return
    }
    alert('Somente valor válido de 0 a 10!')   
    
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Jogo do Número Aleatório</Text>

        <Image source={{ uri: 'https://png.pngtree.com/background/20210714/original/pngtree-gamer-style-cmando-neon-effect-vactor-picture-image_1234598.jpg' }} style={styles.image} />
        
        <Text style={styles.texto}> Vamos lá! Insira um número de 0 a 10:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o número"
          onChangeText={setValorDigitado}
          placeholderTextColor="#666666"
        />

        
        <Pressable style={styles.button} onPress={() => jogo()}>
          <Text style={styles.buttonText}>Jogar</Text>
        </Pressable>

        <Text style={styles.texto}> {resultado} </Text>
      </View>
  )
}

export default Game