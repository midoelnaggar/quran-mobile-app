import { Text as RNText } from "react-native";
import { getProperSize } from "../../utils/helpers";

const Text = ({ children, ff, fs, fc, style }) => {

  return (
    <RNText
      style={{
        fontFamily: ff ? ff : "ta400",
        fontSize: fs ? getProperSize(fs) : getProperSize(14),
        color: fc,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
};

export default Text;
