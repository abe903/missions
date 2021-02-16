import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, Image } from 'react-native';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Youth Wave',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'VBS 2020',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'About Us',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const CategoriesMealsScreen = props => {
    
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/streamside.png')} style={styles.backgroundImage} />
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.list}
        />
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
    //justifyContent: 'center',
    //alignItems: 'center',
    //marginLeft: 40,
    //marginRight: 40,
 
    },
    item: {
      backgroundColor: 'f4f9f9',
      padding: 20,
      paddingLeft: 70,
      paddingRight: 70,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
      paddingTop: 22,
      paddingBottom: 22
    },
    title: {
      fontSize: 32,
    },
    list: {
        paddingTop: 100
    }
  });

export default CategoriesMealsScreen;