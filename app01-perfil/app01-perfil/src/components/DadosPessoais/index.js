import {View, Text} from 'react-native';

import styles from './styles'

function DadosPessoais(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Dados Pessoais</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Ana Caroline Dos Santos, 20 anos, Santos - SP</Text>
  </View>
  )
}

export default DadosPessoais