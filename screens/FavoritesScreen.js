import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const CategoriesScreen = props => {
    
    

    return (
        <View style={styles.screen}>
            <Text>Photos Page</Text>
          
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 140,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;