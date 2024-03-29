import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import MyFavoriteScreen from "../screens/MyFavoriteScreen";
import MyTourScreen from "../screens/MyTourScreen";

import TabButton from "../components/TabButton";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import SearchDestinationScreen from "../screens/SearchDestinationScreen";
import DestinationDetailScreen from "../screens/DestinationDetailScreen";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="DestinationDetailScreen"
        component={DestinationDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="SearchDestinationScreen"
        component={SearchDestinationScreen}
        options={{
          headerTitle: "Search Destination",
          headerTitleStyle: {
            fontSize: totalSize(2.3),
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreen">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerTitle: "Edit Profile",
        }}
      />
      <ProfileStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerTitle: "Change Password",
        }}
      />
    </ProfileStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.darkGray,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="MyTripsScreen"
          component={MyTourScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="rocket1" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyFavoriteScreen"
          component={MyFavoriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="hearto" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
            tabBarButton: (props) => <TabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="UserSettings"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
            tabBarBadge: 2,
            tabBarBadgeStyle: styles.tabBadge,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: height(2.2),
    left: width(5),
    right: width(5),
    backgroundColor: colors.white,
    borderRadius: totalSize(1),
    height: height(8),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1.5,
  },
  tabBadge: {
    fontSize: totalSize(1.5),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthNavigator;
