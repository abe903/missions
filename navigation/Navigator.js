import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import GroupsScreen from '../screens/GroupsScreen';

import Colors from '../constants/Colors';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    FavoriteMeals: {
        screen: FavoritesScreen
    },
    Groups: {
        screen: GroupsScreen
      }
  },
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: CategoryMealsScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='home-outline' size={23} color={tabInfo.tintColor}/>
      }
    } },
    Favorites: {screen: CategoriesScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='camera-outline' size={23} color={tabInfo.tintColor}/>
      }
    }},
    Home: {screen: FavoritesScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='book-outline' size={23} color={tabInfo.tintColor}/>
      }
    }},
    Events: {screen: GroupsScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='person-outline' size={23} color={tabInfo.tintColor}/>
      }
    }}
  }, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      showLabel: false 
    }
  });
        
  

export default createAppContainer(MealsFavTabNavigator);
