import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 35
    },
    titulo:{
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      margin: 10,
      paddingTop: 20
    },
    image: { 
      width: 280, 
      height: 150, 
      alignSelf: 'center',
      marginBottom: 30
      },

    texto:{
      textAlign: 'center',
      fontSize: 17,
    },
    button: {
      backgroundColor: 'green',
      padding: 7,
      margin: 20,
      borderWidth: 1.7
    },

    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },

    input:{
      borderWidth: 1,
      marginHorizontal: 40,
      marginVertical: 10,
      padding: 10,
  }
});

export {styles}