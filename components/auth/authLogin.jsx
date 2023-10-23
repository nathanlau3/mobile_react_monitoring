import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { auth } from "../../config/firebase";
import { COLORS, icons } from "../../constants";
import styles from "./authLoginStyle";

export default AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    navigation.navigate("HomeScreen");
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((cred) => {
    //     const user = cred.user;
    //     navigation.navigate("HomeScreen");
    //     console.log(user);
    //   })
    //   .catch((err) => {
    //     alert("Log in failed. Incorrect credential.");
    //     const errorCode = err.code;
    //     const errorMessage = err.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <View style={styles.logoContainer}>
                </View> */}
        <ImageBackground
          resizeMode="cover"
          style={{
            width: "100%",
            height: "65%",
            borderRadius: 10,
            top: 0,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
          }}
          source={icons.illustration}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.secondary,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            top: "37%",
            bottom: "20%",
            width: "100%",         
            elevation: 10   
          }}
        >
        <View style={{flex:1, width: "100%", alignItems: "center", top: "10%"}}>
          <View
            style={{
              backgroundColor: COLORS.lightWhite,
              borderRadius: 5,
              width: "75%",
              height: "7%",
              justifyContent: "center",
            }}
          >
            <TextInput
              onChangeText={setEmail}
              placeholder="Email"
              style={{ fontSize: 15, paddingHorizontal: 20 }}
            ></TextInput>
          </View>
          <View
            style={{
              backgroundColor: COLORS.lightWhite,
              borderRadius: 5,
              width: "75%",
              height: "7%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TextInput
              onChangeText={setPassword}
              placeholder="Password"
              style={{ paddingHorizontal: 20, fontSize: 15 }}
            ></TextInput>
          </View>
          {/* <View> */}
          <TouchableOpacity
            onPress={onLogin}
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 5,
              width: "25%",
              height: "5%",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: COLORS.lightWhite, textAlign: "center" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        {/* </View>                 */}
      </View>
    </KeyboardAvoidingView>
  );
};
