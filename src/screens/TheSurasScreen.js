import { View, StyleSheet, FlatList } from "react-native";
import Text from "../components/UI/Text";
import surasData from "../content/suras.json";
import { theSurasScreen as content } from "../content/ar.json";
import { getProperSize } from "../utils/helpers";
import Sura from "../components/SuraListItem";
import { StatusBar } from "expo-status-bar";

export default function TheSurasScreen() {
  return (
    <View style={styles.surasScreen}>
      <StatusBar style="light" />
      <Text fs={16} style={styles.title}>
        {content.title}
      </Text>
      <FlatList
        style={styles.surasContainer}
        data={surasData}
        keyExtractor={({ id }) => {
          return `${id}`;
        }}
        renderItem={({ item }) => {
          return (
            <Sura
              number={item.id}
              name={item.name_arabic}
              page={item.pages[0]}
              ayas={item.verses_count}
              place={item.revelation_place}
              pages={item.pages}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  surasScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    marginVertical: getProperSize(24),
  },
  surasContainer: {
    marginBottom: getProperSize(70),
  },
});
