import { colors } from "../theme";
import Text from "../components/UI/Text";
import { Pressable, StyleSheet, View, ImageBackground } from "react-native";
import { getProperSize } from "../utils/helpers";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { contentsScreen as content } from "../content/ar.json";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TheSurasScreen from "./TheSurasScreen";
import TheJuzsScreen from "./TheJuzsScreen";
import TheHezbsScreen from "./TheHezbsScreen";
import MoshafImage from "../../assets/images/Moshaf.svg";
import PlayIcon from "../../assets/images/icons/Play.svg";
import pattern10 from "../../assets/images/pattern10.png";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function ContentsScreen() {
  const { currentReading } = useSelector((state) => state);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <ImageBackground
          source={pattern10}
          style={styles.headerImageBackground}
        >
          <Pressable onPress={() => navigation.navigate("Sura")}>
            <LinearGradient
              colors={["white", "#E1E1E1"]}
              style={styles.lastRead}
            >
              <View style={styles.moshafImageContainer}>
                <MoshafImage />
              </View>
              <View style={styles.lastReadTextContainer}>
                <Text
                  fc={colors.c1}
                  fs={22}
                  ff="ta600"
                  style={styles.lastReadTitle}
                >
                  {content.lastRead}
                </Text>
                <Text
                  fc={colors.c4}
                  fs={16}
                  ff="ta500"
                  style={styles.lastReadSuraName}
                >{`${content.sura} ${currentReading.suraName}`}</Text>
                <Text
                  fc={colors.c7}
                  fs={14}
                  ff="ta400"
                  style={styles.lastReadPageNumber}
                >{`${content.thePage} ${currentReading.page}`}</Text>
              </View>
              <Pressable style={styles.lastReadPlayIconContainer}>
                <PlayIcon height={getProperSize(20)} />
              </Pressable>
            </LinearGradient>
          </Pressable>
        </ImageBackground>
      </View>
      <Tab.Navigator
        style={styles.tabsContainer}
        initialRouteName={content.theSuras}
        screenOptions={{
          tabBarLabel: ({ children, focused }) => {
            return (
              <View>
                <Text fs={16} fc={focused ? "white" : "black"}>
                  {children}
                </Text>
              </View>
            );
          },
          tabBarStyle: styles.tabsButtonContainer,
          tabBarIndicatorStyle: {
            height: "100%",
            borderRadius: 99,
            backgroundColor: colors.c1,
          },
          tabBarItemStyle: { borderRadius: 99, padding: 0 },
        }}
        backBehavior="initialRoute"
      >
        <Tab.Screen
          options={({ route }) => ({})}
          name={content.theHezbs}
          component={TheHezbsScreen}
        />
        <Tab.Screen name={content.theJuzs} component={TheJuzsScreen} />
        <Tab.Screen name={content.theSuras} component={TheSurasScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    backgroundColor: colors.c1,
    borderBottomStartRadius: getProperSize(20),
    borderBottomEndRadius: getProperSize(20),
  },
  headerImageBackground: {
    paddingVertical: getProperSize(90),
  },
  lastRead: {
    flexDirection: "row-reverse",
    marginStart: getProperSize(44),
    marginEnd: getProperSize(20),
    borderRadius: 20,
    paddingVertical: getProperSize(10),
  },
  moshafImageContainer: {
    flexDirection: "row-reverse",
    marginStart: getProperSize(-24),
  },

  lastReadTextContainer: {
    flexDirection: "column",
    marginRight: getProperSize(15),
  },
  lastReadTitle: {},
  lastReadSuraName: {
    marginBottom: getProperSize(5),
  },
  lastReadPageNumber: {},
  lastReadPlayIconContainer: {
    flexDirection: "row-reverse",
    marginStart: "auto",
    marginEnd: getProperSize(20),
    alignSelf: "center",
  },
  tabsContainer: {
    marginTop: getProperSize(-25),
    marginHorizontal: getProperSize(24),
  },
  tabsButtonContainer: {
    borderRadius: 99,
    borderBottomWidth: 0,
  },
});
