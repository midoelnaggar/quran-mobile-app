import { View, StyleSheet, FlatList } from "react-native";
import Text from "../components/UI/Text";
import hezbsData from "../content/hezbs.json";
import { theSurasScreen as content } from "../content/ar.json";
import { getProperSize } from "../utils/helpers";
import JuzOrHezbListItem from "../components/JuzOrHezbListItem";
import { StatusBar } from "expo-status-bar";

export default function TheHezbsScreen() {
  return (
    <View style={styles.surasScreen}>
            <StatusBar style="light" />
      <Text fs={16} style={styles.title}>
        {content.title}
      </Text>
      <FlatList
        style={styles.surasContainer}
        data={hezbsData}
        keyExtractor={({ id }) => {
          return `${id}`;
        }}
        renderItem={({ item }) => {
          return <JuzOrHezbListItem number={item.id} suras={Object.entries(item.verse_mapping)} />;
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
