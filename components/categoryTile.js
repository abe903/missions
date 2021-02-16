import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryTile = props => {
    return (<TouchableOpacity
        styles={styles.gridItem}
        >
        <Text>{itemData.item.title}</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        margin: 15,
        height: 150
    }

})

export default CategoryTile;