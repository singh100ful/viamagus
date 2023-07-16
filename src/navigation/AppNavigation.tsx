import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorPresets} from '@src/theme/color';
import {HomeScreen} from '@src/screens/home/HomeScreen';
import {LeaguesScreen} from '@src/screens/leagues/LeaguesScreen';
import {LeaderBoardScreen} from '@src/screens/leaderboard/LeaderBoardScreen';
import {ProfileScreen} from '@src/screens/profile/ProfileScreen';
import {ResearchScreen} from '@src/screens/research/ResearchScreen';
import {defaultTexts} from '@src/theme/fonts';
import {Images} from '@src/assets';

interface AppNavigationProps {}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorPresets.primaryCTA,
        tabBarInactiveTintColor: ColorPresets.secondaryText,
        tabBarLabelStyle: {...defaultTexts.tabLabel},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: props => <Images.SVG.HomeIcon color={props.color} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <Images.SVG.TrophyIcon color={props.color} />,
        }}
        name="League"
        component={LeaguesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <Images.SVG.SearchIcon color={props.color} />,
        }}
        name="Research"
        component={ResearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <Images.SVG.AnalyticsIcon color={props.color} />,
        }}
        name="Leaderboard"
        component={LeaderBoardScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <Images.SVG.UserIcon color={props.color} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeTab"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
