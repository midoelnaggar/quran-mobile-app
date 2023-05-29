import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { getProperSize } from "../utils/helpers";
import { colors } from "../theme";
import Text from "./UI/Text";
import suras from "../content/suras.json";
import { separatorsScreen as content } from "../content/ar.json";

import SeparatorActive from "../../assets/images/icons/SeparatorActive.svg";
import { useDispatch } from "react-redux";
import { removeSeparator } from "../store";

const SeparatorListItem = ({ number }) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setName(
      suras.filter(
        (sura) => sura.pages[0] <= number && sura.pages[1] >= number
      )[0]?.name_arabic
    );
  }, [number]);

  return (
    <View style={styles.separator}>
      <TouchableOpacity onPress={()=>dispatch(removeSeparator(number))}>
        <SeparatorActive width={getProperSize(16)} height={getProperSize(20)} />
      </TouchableOpacity>
      <View style={styles.titleAndDetails}>
        <Text ff="ta500" fs={16} fc={colors.c4}>
          {content.title}
        </Text>
        <Text
          fs={14}
          fc={colors.c7}
        >{`${name} - ${content.thePage} ${number}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: getProperSize(15),
    backgroundColor: colors.c6,
    paddingHorizontal: getProperSize(20),
    paddingVertical: getProperSize(10),
    borderRadius: getProperSize(20),
  },
  titleAndDetails: {
    marginHorizontal: getProperSize(20),
  },
});
export default SeparatorListItem;
