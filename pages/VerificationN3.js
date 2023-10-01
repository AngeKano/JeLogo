import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList } from "react-native-gesture-handler";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";
import { AuthContext } from "../context/AuthContext";
import Data from "../components/Data";

SplashScreen.preventAutoHideAsync();

const VerificationN3 = ({ route, navigation: { replace, navigate } }) => {
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
  const { Data_Null } = Data;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Data_Null}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View onLayout={onLayoutRootView} style={styles.container}>
            <View
              style={[
                { alignItems: "center" },
                Dimensions.get("window").height < 600 ? null : { flex: 2 },
              ]}
            >
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
            </View>
            <View
              style={[
                {
                  width: "100%",
                  justifyContent: "flex-end",
                },
                Dimensions.get("window").height < 600 ? null : { flex: 1.5 },
              ]}
            >
              <View style={{ gap: 10 }}>
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
                        typeof item != "object"
                          ? setPwd([...pwd, item])
                          : setPwd([]);
                      }}
                    >
                      <Text
                        style={{ fontSize: 20, fontFamily: "Nunito-Medium" }}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  )}
                />
                <View style={{ marginBottom: 15 }}>
                  <BtnItem
                    text={
                      route.params.type == "Inscription"
                        ? "Valider"
                        : "Terminer"
                    }
                    navigation={() =>
                      route.params.type == "Inscription"
                        ? navigate("verificationN21", { type: "Inscription" })
                        : replace("mainScreen")
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default VerificationN3;

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get("window").height * 0.1,
    height: Dimensions.get("window").height,
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
