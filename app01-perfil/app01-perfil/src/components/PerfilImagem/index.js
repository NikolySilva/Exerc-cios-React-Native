import {View, Image} from 'react-native';
import styles from './styles'

function ImagemPerfil(){
  let img = 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return(
    <View>
      <Image
        source={{ uri: img }}
        style={[styles.tamanhoImagem, styles.alinhaImagem]}
      />
    </View>
  )
}

export default ImagemPerfil