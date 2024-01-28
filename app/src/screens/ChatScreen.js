import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import Spacer from "../components/Spacer";
import { AntDesign } from "@expo/vector-icons";

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppText
          variant="Bold"
          style={{
            fontSize: totalSize(2.5),
            marginVertical: height(2),
          }}
        >
          Chat With AI
        </AppText>

        <View style={styles.chatContainer}>
          <View style={styles.chatBox}>
            <AppText variant="Light" style={styles.chatText}>
              Hello, I am your virtual assistant. How can I help you?
            </AppText>
          </View>

          <View style={styles.chatBox}>
            <AppText variant="Light" style={styles.chatText}>
              I am an AI chatbot. I can help you find the best tour package for
              you.
            </AppText>
          </View>

          <View style={styles.userSentTextContainer}>
            <AppText variant="Light" style={styles.userSentText}>
              I am looking for a tour package to Bali.
            </AppText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.messageInput}>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="Type your message here"
            style={{
              backgroundColor: colors.lightGray,
              borderRadius: totalSize(2),
              padding: totalSize(2),
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.black,
            borderRadius: totalSize(2),
            padding: totalSize(2),
            marginLeft: width(2),
          }}
        >
          <AntDesign
            name="arrowright"
            size={totalSize(2.5)}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
  },
  chatContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  chatBox: {
    backgroundColor: colors.lightGray,
    padding: totalSize(2),
    borderRadius: totalSize(2),
    marginBottom: height(2),
  },
  chatText: {
    fontSize: totalSize(1.7),
  },
  userSentTextContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  userSentText: {
    fontSize: totalSize(1.7),
    backgroundColor: colors.black,
    padding: totalSize(1.2),
    borderRadius: totalSize(2),
    color: colors.white,
  },
  messageInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height(2),
    alignSelf: "flex-end",
  },
  inputContainer: {
    flex: 1,
  },
});

export default ChatScreen;
