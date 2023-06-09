import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList } from "react-native-gesture-handler";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";
import { AuthContext } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

const VerificationN3 = ({ navigation: { replace } }) => {
  const [pwd, setPwd] = useState([]);
  const { tablCode } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const puce = [0, 1, 2, 3];

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <VerifItem text="Code de validation reçu par SMS" />
        <View style={styles.ViewPuce}>
          <View>
            <FlatList
              data={puce}
              horizontal
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.puce,
                    {
                      borderColor:
                        pwd.length > item
                          ? "#0372C1"
                          : "rgba(3, 114, 193, 0.25)",
                    },
                  ]}
                >
                  <Text style={styles.text}>{pwd[index]}</Text>
                </View>
              )}
            />
          </View>
        </View>

        {/* <TextInput
          style={styles.TextInput}
          placeholder="XXXX"
          keyboardType="numeric"
          maxLength={4}
          onSubmitEditing={() => replace("mainScreen")}
        /> */}

        {/* <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
          <BtnItem text="Terminer" navigation={() => replace("mainScreen")} />
        </View> */}
      </View>
      <View
        style={{
          flex: 1.5,
          gap: 8,
          width: "100%",
        }}
      >
        <View style={{ gap: 17 }}>
          <FlatList
            data={tablCode}
            numColumns={4}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  height: 50,
                }}
                onPress={() => {
                  typeof item != "object" ? setPwd([...pwd, item]) : setPwd([]);
                }}
              >
                <Text style={{ fontSize: 20, fontFamily: "Nunito-Medium" }}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
          <BtnItem text="Terminer" navigation={() => replace("mainScreen")} />
        </View>
      </View>
    </View>
  );
};

export default VerificationN3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },
  TextInput: {
    marginTop: 44,
    height: "auto",
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    letterSpacing: 8,
    fontFamily: "Nunito-Medium",
  },
  puce: {
    width: 40,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    fontFamily: "Nunito-Medium",
    fontSize: 20,
  },
  ViewPuce: {
    flexDirection: "row",
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
