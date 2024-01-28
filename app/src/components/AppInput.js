import { StyleSheet, TextInput } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import colors from "../../config/colors";

export default function AppInput({
  placeholder = "Placeholder",
  boxed = false,
  ...props
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        ...styles.input,
        borderRadius: boxed ? totalSize(1) : totalSize(10),
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: width(5),
    paddingVertical: height(1.8),
    borderRadius: totalSize(10),
    marginBottom: height(2),
  },
});
