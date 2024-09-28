import {View, Text} from 'react-native';

import styles from './styles'

function Projetos(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Projetos</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Aplicativo de Catálogo de Filme, API de Inventário de Produtos, Digital bird game</Text>
  </View>
  )
}

export default Projetos