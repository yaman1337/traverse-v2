import { View, Text, StyleSheet } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../components/AppText";
import colors from "../../config/colors";

import AppInput from "../components/AppInput";
import Button from "../components/Button";
import { useState } from "react";

const ChangePasswordScreen = () => {
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
        Change Password
      </AppText>

      <View style={styles.formContainer}>
        <AppInput
          placeholder="Old Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, oldPassword: text })
          }
        />
        <AppInput
          placeholder="New Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, newPassword: text })
          }
        />
        <AppInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, confirmPassword: text })
          }
        />
        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
          onPress={handleChangePassword}
        >
          Change Password
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
    marginTop: height(3),
  },
});

export default ChangePasswordScreen;
