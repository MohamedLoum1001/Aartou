import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import BoutonReutilisable from "../components/BoutonReutilisable";
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Group1.png')} />
      </View>
      <SafeAreaView>
        <TextInput style={styles.input} placeholder="Numero de telephone" />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />

        <View>
          <Link href={'/Signaler'}>
            <BoutonReutilisable title="Se Connecter" />
          </Link>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text1}>Mot de passe oublié?</Text>
          <Link href={'/inscription'} asChild>
            <TouchableOpacity>
              <Text style={styles.text2}>Créer un compte</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.text3}>Powered by Elikia</Text>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,

  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  text1: {
    fontWeight: "600",
    fontSize: 15,
    color: '#000000',
  },
  text2: {
    fontWeight: "600",
    fontSize: 15,
    color: '#000000',
  },
  text3: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  image: {
    width: 136,
    height: 134,
    marginTop: 60,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 50,
    width: 308,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
