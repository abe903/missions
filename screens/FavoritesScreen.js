import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const CategoriesScreen = props => {
    
    let img = require('../assets/streamside.png');
    if (img) {
        console.log(img)
    }

    return (
        <View style={styles.screen}>
            <ImageBackground source={ require('../assets/streamside.png') } style={styles.image}>
            </ImageBackground>

            <Button title="Go to Meals!" onPress={ () =>{
                props.navigation.navigate({routeName: 'CategoryMeals'})
            }}/>
            <Button title="Go to Meals!" onPress={ () =>{
                props.navigation.navigate({routeName: 'FavoriteMeals'})
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 40
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;