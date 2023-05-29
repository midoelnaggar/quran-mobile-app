import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContentsScreen from "../screens/ContentsScreen";
import SearchScreen from "../screens/SearchScreen";
import SeparatorsScreen from "../screens/SeparatorsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { colors, icons } from "../theme";
import Text from "../components/UI/Text";
import { getProperSize, isAndroid } from "../utils/helpers";
import { bottomNavBar as content } from "../content/ar.json";
import ContentsStack from "./ContentsStack";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const {
    ContentsIcon,
    ContentsActiveIcon,
    SearchIcon,
    SearchActiveIcon,
    SeparatorsIcon,
    SeparatorsActiveIcon,
  } = icons;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarLabel: ({ children }) => {
            return (
              <Text fc={colors.c1} fs={12}>
                {children}
              </Text>
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarAllowFontScaling: true,
        })}
        initialRouteName={content.contents}
        backBehavior="initialRoute"
      >
        <Tab.Screen
          name={content.separators}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <View style={styles.tabBarIconContainer}>
                  <SeparatorsActiveIcon height={getProperSize(20)} />
                </View>
              ) : (
                <View
                  style={{
                    ...styles.tabBarIconContainer,
                    backgroundColor: "unset",
                  }}
                >
                  <SeparatorsIcon height={getProperSize(20)} />
                </View>
              );
            },
          }}
          navigationKey="Separator"
          component={SeparatorsScreen}
        />
        <Tab.Screen
          name={content.search}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <View style={styles.tabBarIconContainer}>
                  <SearchActiveIcon height={getProperSize(20)} />
                </View>
              ) : (
                <View
                  style={{
                    ...styles.tabBarIconContainer,
                    backgroundColor: "unset",
                  }}
                >
                  <SearchIcon height={getProperSize(20)} />
                </View>
              );
            },
          }}
          navigationKey="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          name={content.contents}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <View style={styles.tabBarIconContainer}>
                  <ContentsActiveIcon height={getProperSize(20)} />
                </View>
              ) : (
                <View
                  style={{
                    ...styles.tabBarIconContainer,
                    backgroundColor: "unset",
                  }}
                >
                  <ContentsIcon height={getProperSize(20)} />
                </View>
              );
            },
          }}
          navigationKey="Contents"
          component={ContentsStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginTop: getProperSize(-70),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    height: getProperSize(isAndroid ? 77 : 110),
    elevation:4
  },
  tabBarItem: {
    marginBottom: 15,
    fontFamily: "ta300",
  },
  tabBarLabel: {
    color: "white",
    fontFamily: "ta400",
  },
  tabBarIconContainer: {
    backgroundColor: colors.c1,
    paddingVertical: getProperSize(4),
    borderRadius: getProperSize(12),
    width: getProperSize(40),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getProperSize(4),
  },
});
