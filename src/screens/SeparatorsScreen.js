import { StatusBar } from "expo-status-bar";
import Text from "../components/UI/Text";
import { ImageBackground, FlatList, StyleSheet, View } from "react-native";
import pattern05 from "../../assets/images/pattern05.png";
import { getProperSize } from "../utils/helpers";
import { separatorsScreen as content } from "../content/ar.json";
import { useSelector } from "react-redux";
import SeparatorListItem from "../components/SeparatorListItem";

function SeparatorsScreen() {
  const { separators } = useSelector((state) => state);
  return (
    <ImageBackground source={pattern05} style={styles.headerImageBackground}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Text style={styles.title} ff={"ta500"} fs={getProperSize(20)}>
          {content.title}
        </Text>
        <FlatList
          style={styles.separatorsContainer}
          data={separators}
          keyExtractor={(id) => {
            return `${id}`;
          }}
          renderItem={({ item }) => {
            return <SeparatorListItem number={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
        <Text style={{ alignSelf: "auto" }}>{separators[1]}</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  headerImageBackground: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  container: {
    width: "100%",
    paddingVertical:getProperSize(45),
    paddingHorizontal: getProperSize(24),
  },
  separatorsContainer: {
    flex: 1,
    alignSelf: "baseline",
    width: "100%",
    height: "100%"  },

  title: {
    alignSelf: "baseline",
    textAlign: "center",
    width: "100%",
    marginVertical:getProperSize(18)
  },
});

export default SeparatorsScreen;
