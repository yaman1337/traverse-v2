import { useContext, useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import { AuthContext } from "../../context/AuthContext";

import AppText from "../components/AppText";
import Setting from "../components/Setting";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import UserAvatar from "react-native-user-avatar";
import { useNavigation } from "@react-navigation/native";
import { account } from "../lib/appwrite";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await account.get();
      console.log(result);
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.userProfileContainer}>
          {/* <Image
            source={{
              uri: "https://www.sajjan.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi8g6lksr%2Fimage%2Fupload%2Fv1702912693%2FWhatsApp_Image_2023-12-18_at_21.00.05_ae115b08_ui2ue0.jpg&w=640&q=75",
            }}
            style={styles.userProfileImage}
          /> */}
          <UserAvatar size={100} name={user?.name} />

          <AppText variant="SemiBold" style={styles.userProfileName}>
            {user?.name}
          </AppText>
          <AppText variant="Light" style={styles.userEmail}>
            {user?.email}
          </AppText>
        </View>

        <AppText variant="SemiBold" style={styles.settingHeaderTitle}>
          Settings
        </AppText>

        <View style={styles.settingsContainer}>
          <Setting
            iconName="user"
            onPress={() => navigation.navigate("EditProfileScreen")}
          >
            Edit Profile
          </Setting>
          <Setting iconName="calendar">Plan Tour</Setting>
          <Setting
            iconName="lock"
            onPress={() => navigation.navigate("ChangePasswordScreen")}
          >
            Change Password
          </Setting>
          <Setting iconName="creditcard">Payment Methods</Setting>
          <Setting iconName="staro">Rate Us</Setting>
          <Setting iconName="logout" onPress={() => logout()}>
            Logout
          </Setting>
        </View>

        <Spacer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(3),
    // paddingVertical: height(3),
  },
  userProfileContainer: {
    alignItems: "center",
  },
  userProfileImage: {
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
  },
  userProfileName: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  userEmail: {
    fontSize: totalSize(1.8),
    color: colors.darkGray,
  },
  settingHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(3),
  },
  settingsContainer: {
    marginTop: height(1),
    marginHorizontal: width(3),
    paddingBottom: height(3),
  },
});
