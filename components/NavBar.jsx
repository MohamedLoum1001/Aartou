import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';

const NavBar = () => {
    const data = [
        {
            imageIcon: require('../assets/notification.png'),
            title: "Signaler",
            titre: " un dépôt d'ordure"
        },
        {
            imageIcon: require('../assets/map.png'),
            title: "Géo-localiser",
            titre: "des déchets"
        },
        {
            imageIcon: require('../assets/search.png'),
            title: "Rechercher",
            titre: "les déchets par zone"
        },
        {
            imageIcon: require('../assets/geolocalisation.png'),
            title: "Nos points",
            titre: "de collectes"
        },
        {
            imageIcon: require('../assets/compresseur.png'),
            title: 'Nos machines',
            titre: "compresseurs"
        },
        {
            imageIcon: require('../assets/camion.png'),
            title: "L'Emplacement",
            titre: "de nos camions"
        },
        // Ajoutez d'autres éléments de navigation
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselItem}>
                <Text style={styles.carouselText}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={100}
            layout="default"
            loop={true}
        />
    )
}

export default NavBar

const styles = StyleSheet.create({
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3', // Couleur de fond
        borderRadius: 5,
    },
    carouselText: {
        color: 'white',
        fontSize: 16,
    },
})