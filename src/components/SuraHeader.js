import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { getProperSize } from "../utils/helpers";
import { colors } from "../theme";
import pattern10 from "../../assets/images/pattern10.png";
import ReplayWhite from "../../assets/images/icons/ReplayWhite.svg";
import SeparatorWhite from "../../assets/images/icons/SeparatorWhite.svg";
import SeparatorWhiteActive from "../../assets/images/icons/SeparatorWhiteActive.svg";
import Text from "./UI/Text";
import { useDispatch, useSelector } from "react-redux";
import { addSeparator, removeSeparator } from "../store";
import { useEffect } from "react";

const SuraHeader = ({ suraName, page }) => {
  const { separators } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleAddSeparator = () => {
    dispatch(addSeparator(page))
  }

  const handleRemoveSeparator = () => {
    dispatch(removeSeparator(page))
  }

  useEffect(() => {
    console.log(separators)
  }, [separators]);

  return (
    <View style={styles.container}>
      <ImageBackground source={pattern10} style={styles.headerImageBackground}>
        <TouchableOpacity>
          <ReplayWhite />
        </TouchableOpacity>
        <Text
          ff="diwany"
          fc="white"
          fs={getProperSize(27)}
          style={styles.suraName}
        >
          {`سورة ${suraName}`}
        </Text>
        {separators?.includes(page) ? (
          <TouchableOpacity onPress={handleRemoveSeparator}>
            <SeparatorWhiteActive />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleAddSeparator}>
            <SeparatorWhite />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.c1,
    borderBottomStartRadius: getProperSize(20),
    borderBottomEndRadius: getProperSize(20),
  },

  headerImageBackground: {
    paddingHorizontal: getProperSize(24),
    paddingVertical: getProperSize(45),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  suraName: {
    letterSpacing: getProperSize(-0.5),
  },
});

export default SuraHeader;
