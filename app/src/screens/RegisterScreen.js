import { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { width, height, totalSize } from "react-native-dimension";
import * as ImagePicker from "expo-image-picker";

import colors from "../../config/colors";

import AppText from "../components/AppText";
import Button from "../components/Button";
import AppInput from "../components/AppInput";
import { AuthContext } from "../../context/AuthContext";
import { useToast } from "react-native-toast-notifications";
import { account } from "../lib/appwrite";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const toast = useToast();
  const [credentials, setCredentials] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  //   const { login } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    console.log(credentials);
    // check for empty fields
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.show("Please fill in all fields", {
        type: "danger",
      });
      setLoading(false);
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.show("Passwords do not match", {
        type: "danger",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await account.create(
        credentials.username,
        credentials.email,
        credentials.password,
        credentials.name
      );
      if (res) {
        toast.show("New account created.");
        setLoading(false);
      }
      setLoading(false);
      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000);
    } catch (error) {
      toast.show(error.message, {
        type: "danger",
      });
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Register Account
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        {/* Image Picker  */}
        {/* <View style={styles.imagePickerContainer}>
          {!image ? (
            <>
              <TouchableOpacity
                style={styles.imagePicker}
                onPress={pickImage}
                activeOpacity={0.5}
              >
                <AntDesign name="camera" size={28} />
              </TouchableOpacity>

              <AppText variant="Light" style={styles.imagePickerText}>
                Choose Profile Picture
              </AppText>
            </>
          ) : (
            <TouchableOpacity onPress={pickImage} activeOpacity={0.5}>
              <Image source={{ uri: image }} style={styles.profileImage} />
            </TouchableOpacity>
          )}
        </View> */}

        <AppInput
          placeholder="John Doe"
          onChangeText={(text) =>
            setCredentials({ ...credentials, name: text })
          }
        />
        <AppInput
          placeholder="Username"
          onChangeText={(text) =>
            setCredentials({ ...credentials, username: text })
          }
        />
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
        <AppInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setCredentials({ ...credentials, confirmPassword: text })
          }
        />

        {loading ? (
          <ActivityIndicator size="large" color={colors.black} />
        ) : (
          <Button
            font="Poppins-SemiBold"
            activeOpacity={0.8}
            backgroundColor={colors.black}
            textColor={colors.white}
            onPress={handleRegister}
          >
            Register
          </Button>
        )}

        <AppText
          variant="Light"
          style={styles.signIn}
          onPress={() => navigation.navigate("Login")}
        >
          Already Have an Account? Login
        </AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(5),
    backgroundColor: colors.white,
    paddingTop: height(5),
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  formContainer: {
    marginTop: height(5),
  },
  imagePicker: {
    backgroundColor: colors.lightGray,
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
    marginBottom: height(1),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imagePickerContainer: {
    marginBottom: height(2),
  },
  imagePickerText: {
    textAlign: "center",
  },
  profileImage: {
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
    marginBottom: height(1),
    alignSelf: "center",
  },
  forgotPassword: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
  },
  signIn: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
    textAlign: "center",
  },
});
