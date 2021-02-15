import React from 'react';
import { Image, View, FlatList, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTile from '../components/categoryTile';


const FavoritesScreen = props => {
    const renderGridItem = itemData => {
        return (
     
            <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
            </View>
        
        )}
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        paddingTop: 120,
        flex: 1,
        margin: 15,
        height: 150,
        borderColor: "#20232a",
        backgroundColor:  'blue'
    }
});

export default FavoritesScreen;
