import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 35
    },
    titulo:{
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
      margin: 35
    },
    image: { 
      width: 300, 
      height: 210, 
      alignSelf: 'center',
      marginBottom: 30
      },

    button: {
      backgroundColor: 'green',
      padding: 10,
      margin: 20,
      borderWidth: 1.5
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    input:{
      borderWidth: 0.5,
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 12
  }
});

export {styles}