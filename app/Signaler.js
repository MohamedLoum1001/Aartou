import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Signaler = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={require('../assets/Group1.png')}
                />
                <View style={styles.texteHeader}>
                    <Text style={styles.text}>Singaler</Text>
                    <Text style={styles.text}>un dépôt d'ordure</Text>
                </View>
                <View style={styles.iconMenu}>
                    <Image
                        style={styles.imageIcon}
                        source={require('../assets/menu.png')}
                    />
                </View>
                {/* <View>
                    <NavBar />
                </View> */}
            </View>
            {/* Body */}
            <View style={styles.body}>
                <Image
                    style={styles.imagePhoto}
                    source={require('../assets/img-photo.png')}
                />
            </View>
        </View>
    )
}

export default Signaler

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    header: {
        // marginVertical: 25,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -500
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
        marginHorizontal: 25
    },
    image: {
        // marginHorizontal: 25,
        width: 43.95,
        height: 53
    },
    imageIcon: {
        width: 21.33,
        height: 20,
        top: 20,
    },
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 250
        // marginTop: 200
    },
    imagePhoto: {
        width: 74,
        height: 73.28
    }
})