import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const BoutonReutilisable = ({title}) => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.btn}>
          <Text style={styles.texte}>{title}</Text>
        </Pressable>
    </View>
  )
}

export default BoutonReutilisable

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        backgroundColor:'#FF0000',
        width: 308,
        height: 53,
        borderRadius: 30
    },
    texte: {
      padding: 15,
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 17
    }
})