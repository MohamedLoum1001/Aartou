import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, CheckBox, Image, Pressable } from 'react-native'
// import BoutonReutilisable from '../components/BoutonReutilisable';
import { Link } from 'expo-router'
import BoutonReutilisable from '../components/BoutonReutilisable';

const inscription = () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href={'/'}>
                    <Pressable style={styles.image}>
                        <Image source={require('../assets/arrow.png')} />
                    </Pressable>
                </Link>
                <View style={styles.texteHeader}>
                    <Text style={styles.text}>Créer un compte</Text>
                </View>
            </View>
            <Text style={styles.texte}>Information sur vous</Text>
            {/* Formulaire */}
            <View style={styles.form}>
                I<TextInput placeholder="Nom" style={styles.input} />
                <TextInput placeholder="Prénom" style={styles.input} />
                <TextInput keyboardType="phone-pad" placeholder="Numéro de téléphone" style={styles.input} />
                <TextInput secureTextEntry={true} placeholder="Mot de passe" style={styles.input} />
                <TextInput secureTextEntry={true} placeholder="Confirmer mot de passs" style={styles.input} />

            </View>

            <Text style={styles.texte}>Localisation</Text>
            <View style={styles.form}>
                {/* Input Select */}
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.input}
                >
                    <Picker.Item label="Dakar" value="Dakar" />
                    <Picker.Item label="Thies" value="Thies" />
                    <Picker.Item label="Diourbel" value="Diourbel" />
                    <Picker.Item label="Ziguinchor" value="Ziguinchor" />
                </Picker>
                <TextInput placeholder="Address exact" style={styles.input} />
            </View>

            {/* CheckBox */}
            <View style={styles.divContainer}>
                <View style={styles.divCheckBox}>
                    <CheckBox
                        value={isChecked1}
                        onValueChange={() => setChecked1(!isChecked1)}
                    />
                    <View style={styles.texteCheckbox}>
                        <Text style={styles.checkbox}>Vous devez accepter nos conditions générales</Text>
                        <Text style={styles.checkbox}>pour continuer votre inscriptions</Text>
                    </View>
                </View>

                <View style={styles.divCheckBox}>
                    <CheckBox
                        value={isChecked2}
                        onValueChange={() => setChecked2(!isChecked2)}
                    />
                    <View style={styles.texteCheckbox}>
                        <Text style={styles.checkbox}>S'abonner à notre newsletter</Text>
                    </View>
                </View>
            </View>

            <View>
                <BoutonReutilisable title="CONFIRMER" />
            </View>
        </View>
    )
}

export default inscription

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f0f0',
        justifyContent: 'center',
    },
    header: {
        marginVertical: 25,
        display: "flex",
        flexDirection: 'row'
    },
    texteHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#FF0000',
        fontSize: 22,
        fontWeight: '800',
        marginHorizontal: 50
    },
    image: {
        marginHorizontal: 25
    },
    texte: {
        color: "#737373",
        fontWeight: '600',
        fontSize: 16,
        marginHorizontal: 25,
        marginVertical: 5
    },
    form: {
        marginHorizontal: 25,
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: 2,
        width: 348,
        height: 40,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        border: 1
    },
    divContainer: {
        marginVertical: 25,
        marginHorizontal: 25
    },
    divCheckBox: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10
    },
    checkbox: {
        fontWeight: '400',
        fontFamily: 'Arial',
        fontSize: 14
    },
    texteCheckbox: {
        marginLeft: 15
    },
    btn: {
        backgroundColor: '#FF0000',
        width: 308,
        height: 53,
        borderRadius: 30
    },
    textes: {
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 17
    },
})