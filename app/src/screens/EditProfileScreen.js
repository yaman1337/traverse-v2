import { View, Text, StyleSheet } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { SafeAreaView } from "react-native-safe-area-context";
import UserAvatar from "react-native-user-avatar";
import AppText from "../components/AppText";
import colors from "../../config/colors";

import AppInput from "../components/AppInput";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const EditProfileScreen = () => {
  const { user } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangePassword = () => {
    console.log(credentials);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerTitle}>
        Edit Profile
      </AppText>

      <View style={styles.avatarContainer}>
        <UserAvatar size={100} name={user?.name} />
      </View>

      <View style={styles.formContainer}>
        <AppInput
          value={user?.$id}
          // disable the input
          editable={false}
        />
        <AppInput
          value={user?.name}
          // disable the input
          editable={false}
        />
        <AppInput value={user?.email} />
        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
          onPress={handleChangePassword}
        >
          Save Changes
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(3),
    // paddingVertical: height(3),
  },

  headerTitle: {
    fontSize: totalSize(2.5),
  },

  avatarContainer: {
    alignItems: "center",
    paddingVertical: height(3),
  },
});

export default EditProfileScreen;
