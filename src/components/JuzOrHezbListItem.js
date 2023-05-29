import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../theme";
import NumberContainerImg from "../../assets/images/icons/NumberContainer.svg";
import Text from "./UI/Text";
import { theSurasScreen as content } from "../content/ar.json";
import { getProperSize } from "../utils/helpers";
import surasData from "../content/suras.json";

const JuzOrHezbListItem = ({ number, suras }) => {
  return (
    <Pressable style={styles.juzOrHezb}>
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
      <View style={styles.surasContainer}>
        {suras.map((sura, index) => {
          return (
            <View key={index} style={index === 0 ? styles.sura : {...styles.sura,borderTopWidth:(1),borderColor:"white"}}>
              <Text ff="ta500" fs={16} fc={colors.c4} style={styles.name}>
                {surasData?.[Number(sura[0]) - 1]?.name_arabic}
              </Text>
              <Text
                fs={14}
                fc={colors.c7}
                style={styles.ayas}
              >{`${content.ayas} ${sura?.[1]}`}</Text>
            </View>
          );
        })}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  juzOrHezb: {
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
  surasContainer: {
    marginHorizontal: getProperSize(20),
  },
  sura: {flexDirection:"row-reverse",paddingVertical:getProperSize(5)},
  name:{
    width:getProperSize(90)
  }
});

export default JuzOrHezbListItem;
