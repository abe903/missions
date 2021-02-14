import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
      }
  },
);

const tabScreenConfig = {
    Meals: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor
      }
    },
    Favorites: {
      screen: CategoriesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor
      }
    }
  };

  const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);
