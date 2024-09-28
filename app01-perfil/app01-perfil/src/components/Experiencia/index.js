import {View, Text} from 'react-native';

import styles from './styles'

function Experiencia(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Experiência</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Vendedora - Infinita Calçados - 2024</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Revendedora Semijóias - It Store - 2023 </Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Recepcionista de Eventos - Buffet Hora da Festa - 2023 </Text>
  </View>
  )
}
export default Experiencia