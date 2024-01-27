import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";

import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useToast } from "react-native-toast-notifications";

export default function LoginScreen() {
  const toast = useToast();
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //   const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // login(credentials);
    console.log(credentials);

    // check for empty fields
    if (!credentials.email || !credentials.password) {
      toast.show("Please fill in all fields", {
        type: "danger",
      });
      return;
    }

    // check for valid email
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      toast.show("Please enter a valid email", {
        type: "danger",
      });
      return;
    }

    // check for valid password
    if (credentials.password.length < 6) {
      toast.show("Password must be at least 6 characters", {
        type: "danger",
      });
      return;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Login
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        <AppInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, email: text })
          }
        />
        <AppInput
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, password: text })
          }
        />

        <AppText
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </AppText>

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
          onPress={handleLogin}
        >
          Login
        </Button>

        <AppText
          variant="Light"
          style={styles.signUp}
          onPress={() => navigation.navigate("Register")}
        >
          Don't have an account? Register
        </AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height(5),
    paddingHorizontal: width(5),
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  formContainer: {
    marginTop: height(5),
  },
  forgotPassword: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
  },
  signUp: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
    textAlign: "center",
  },
});
