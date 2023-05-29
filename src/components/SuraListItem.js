import { Pressable, View, StyleSheet } from "react-native";
import { colors } from "../theme";
import NumberContainerImg from "../../assets/images/icons/NumberContainer.svg";
import Separator from "../../assets/images/icons/Separator.svg";
import Play from "../../assets/images/icons/Play.svg";
import Text from "./UI/Text";
import { theSurasScreen as content } from "../content/ar.json";
import { getProperSize } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";
import { changeSura } from "../store";
import { useDispatch } from "react-redux";

const Sura = ({ number, name, page, ayas, place, pages }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSuraPress = () => {
    navigation.navigate("Sura");
    dispatch(changeSura(number));
  };

  return (
    <Pressable style={styles.sura} onPress={handleSuraPress}>
      <View style={styles.numberContainer}>
        <NumberContainerImg
          height={getProperSize(30)}
          width={getProperSize(30)}
          style={styles.numberContainerImg}
        />
        <Text
          ff="ta500"
          fs={
            number.toString().length == 1
              ? 14
              : number.toString().length == 2
              ? 13
              : number.toString().length == 3 && 12
          }
          fc={colors.c2}
          style={styles.number}
        >
          {number}
        </Text>
      </View>
      <View style={styles.nameAndDetails}>
        <Text ff="ta500" fs={16} fc={colors.c4} style={styles.name}>
          {name}
        </Text>
        <Text
          fs={14}
          fc={colors.c7}
          style={styles.details}
        >{`${content.thePage} ${page} - ${content.theAyas} ${ayas} - ${place}`}</Text>
      </View>
      <View style={styles.actions}>
        <Pressable>
          <Separator />
        </Pressable>
        <Pressable>
          <Play />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sura: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: getProperSize(15),
    backgroundColor: colors.c6,
    paddingHorizontal: getProperSize(20),
    paddingVertical: getProperSize(10),
    borderRadius: getProperSize(20),
  },
  numberContainer: {
    position: "relative",
    height: getProperSize(30),
    width: getProperSize(30),
  },
  numberContainerImg: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: getProperSize(30),
    width: getProperSize(30),
  },
  number: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: getProperSize(30),
    letterSpacing: getProperSize(-0.8),
  },
  nameAndDetails: {
    marginHorizontal: getProperSize(20),
  },
  actions: {
    flexDirection: "row-reverse",
    marginStart: "auto",
    width: getProperSize(50),
    justifyContent: "space-between",
  },
});

export default Sura;
