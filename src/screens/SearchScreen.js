import { StatusBar } from "expo-status-bar";
import Text from "../components/UI/Text";
import {
  ImageBackground,
  FlatList,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import pattern05 from "../../assets/images/pattern05.png";
import SearchGrey from "../../assets/images/icons/SearchGrey.svg";
import { getProperSize } from "../utils/helpers";
import { searchScreen as content } from "../content/ar.json";
import surasData from "../content/suras.json";
import Sura from "../components/SuraListItem";
import { colors } from "../theme";
import { useEffect, useState, useRef } from "react";

function SearchScreen() {
  const [results, setResults] = useState([]);

  const searchInputRef = useRef();

  const handleSearchInputChange = (text) => {
    setResults(
      surasData.filter((sura) => {
        return sura.name_arabic.includes(text);
      })
    );
  };

  return (
    <ImageBackground source={pattern05} style={styles.headerImageBackground}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Text style={styles.title} ff={"ta500"} fs={getProperSize(20)}>
          {content.title}
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <SearchGrey style={styles.icon} />
          </View>
          <TextInput
            ref={searchInputRef}
            style={styles.input}
            placeholder={content.searchForSura}
            textAlign="right"
            cursorColor={colors.c1}
            onChangeText={handleSearchInputChange}
          />
        </View>
        <FlatList
          style={styles.surasContainer}
          data={results}
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
          ListEmptyComponent={<Text fc={colors.c7} fs={getProperSize(20)} style={{textAlign:"center"}}>{content.noResults}</Text>}
        />
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
    paddingVertical: getProperSize(45),
    paddingHorizontal: getProperSize(24),
  },

  title: {
    alignSelf: "baseline",
    textAlign: "center",
    width: "100%",
    marginVertical: getProperSize(18),
  },
  inputContainer: {
    width: "100%",
    marginBottom: getProperSize(18),
    flexDirection: "column-reverse",
  },
  input: {
    fontFamily: "ta400",
    fontSize: getProperSize(14),
    backgroundColor: colors.c6,
    borderRadius: 99999,
    paddingVertical: getProperSize(12),
    paddingHorizontal: getProperSize(20),
  },
  iconContainer: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
  },
});

export default SearchScreen;
