import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";

import AppText from "./AppText";

export default function FavoriteCard({
  image,
  variant = "Light",
  children,
  onPress = () => {},
  onLongPress = () => {},
  subText,
  color,
  backgroundColor,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.reportCard,
        {
          backgroundColor: backgroundColor ? backgroundColor : colors.lightGray,
        },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.4}
    >
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={styles.favoriteImage}
        />
      )}
      <AppText
        variant={variant}
        style={styles.favoriteTitle}
        textColor={color ? color : "black"}
      >
        {children}
      </AppText>
      {subText && (
        <AppText variant="Light" style={styles.favoriteSubTitle}>
          {subText}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reportCard: {
    width: width(40),
    paddingHorizontal: width(5),
    paddingVertical: height(3),
    overflow: "hidden",
    backgroundColor: colors.lightGray,
    borderRadius: width(3),
    alignItems: "center",
    marginVertical: height(1),
    marginHorizontal: width(2),
  },
  favoriteImage: {
    width: totalSize(9),
    height: totalSize(9),
    borderRadius: totalSize(1),
  },
  favoriteTitle: {
    marginTop: height(1.2),
    fontSize: totalSize(2),
    textAlign: "center",
  },
  favoriteSubTitle: {
    marginTop: height(0.5),
    fontSize: totalSize(1.5),
    textAlign: "center",
  },
});
