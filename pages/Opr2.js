import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, TextInput } from "react-native-gesture-handler";
import BtnItem from "../components/BtnItem";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { Entypo } from "@expo/vector-icons";
import Data from "../components/Data";
import { Ionicons } from "@expo/vector-icons";
SplashScreen.preventAutoHideAsync();

const Opr2 = ({ route, navigation: { navigate } }) => {
  const { contactSelect, setContactSelect } = useContext(AuthContext);
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(0);
  const [valueAf, setValueAf] = useState(0);

  const handleCheck = () => {
    setCheck(!check);
  };
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
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

  const { label, img, style } = route.params;
  const { Data_Null } = Data;

  return (
    <FlatList
      data={Data_Null}
      renderItem={({ item }) => (
        <View onLayout={onLayoutRootView} style={styles.container}>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                color: style.color,
                fontFamily: "Nunito-Bold",
                fontSize: 17,
              }}
            >
              {label}
            </Text>
          </View>
          {route.params.operation == "Recharger mon solde" ? (
            <Text style={styles.txtPwd}>Recharger mon compte</Text>
          ) : (
            <Text style={styles.txtPwd}>Transférez votre argent</Text>
          )}

          <View style={{ gap: 23, marginVertical: 30 }}>
            {label == "VISA" ? (
              <>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                    IBAN
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="XXX XXX XXXX 12"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                    Banque du bénéficiare
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Banque d'Abidjan (BDA)"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                    Nom du bénéficiare
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="LASTNAME NAME"
                    keyboardType="numeric"
                  />
                </View>
              </>
            ) : (
              <View style={{ alignItems: "center", gap: 15 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    gap: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Nunito-Regular",
                      borderBottomWidth: 1,
                      borderBottomColor: style.color,
                    }}
                  >
                    +225
                  </Text>
                  <TextInput
                    style={styles.TextInput}
                    value={
                      contactSelect.phoneNumbers == undefined
                        ? null
                        : // : console.log(contactSelect.phoneNumbers)
                          Object.values(contactSelect.phoneNumbers)[0].number
                    }
                    placeholder="Numéro du compte"
                    keyboardType="numeric"
                    onSubmitEditing={() =>
                      navigate("code", {
                        type: "normal",
                      })
                    }
                  />
                </View>

                <View style={{ alignSelf: "flex-start" }}>
                  <Pressable
                    style={{
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    onPress={() => navigate("ContactsScreen")}
                  >
                    <View
                      style={{
                        padding: 10,
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="contacts" size={24} color="black" />
                      <Text
                        style={{
                          textAlign: "left",
                          fontSize: 18,
                          fontFamily: "Nunito-Medium",
                        }}
                      >
                        Vos contacts
                      </Text>
                    </View>

                    <AntDesign name="right" size={20} color="black" />
                  </Pressable>
                  <Text
                    style={{
                      marginVertical: 10,
                      fontFamily: "Nunito-Regular",
                      color: "gray",
                      marginLeft: 10,
                    }}
                  >
                    Contacts récents
                  </Text>
                  <Text
                    style={{
                      marginVertical: 10,
                      fontFamily: "Nunito-Regular",
                      color: "gray",
                      marginLeft: 10,
                      marginBottom: 5,
                    }}
                  >
                    Contacts sélectionnés
                  </Text>
                </View>
              </View>
            )}
          </View>

          {typeof contactSelect.phoneNumbers == "undefined" ? null : (
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 5,
                marginBottom: 30,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 7, alignItems: "center" }}
              >
                <View
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    backgroundColor: "#C2D0E1",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 17, fontFamily: "Nunito-Medium" }}>
                    {contactSelect.lastName == undefined
                      ? contactSelect.name.substr(0, 2)
                      : contactSelect.firstName.substr(0, 1) +
                        contactSelect.lastName.substr(0, 1)}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 17, fontFamily: "Nunito-Medium" }}>
                    {contactSelect.name}
                  </Text>
                  <Text style={{ fontSize: 17, fontFamily: "Nunito-Medium" }}>
                    {Object.values(contactSelect.phoneNumbers)[0].number}
                  </Text>
                </View>
              </View>
              <Pressable style={{}} onPress={() => setContactSelect({})}>
                <Entypo name="cross" size={24} color="gray" />
              </Pressable>
            </View>
          )}

          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Nunito-SemiBold",
                marginBottom: 15,
              }}
            >
              Entrez le montant
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Ionicons name="cash" size={24} color="black" />
              <TextInput
                style={styles.TextInput}
                placeholder="Montant"
                keyboardType="numeric"
                onChangeText={(value) => {
                  setValue(parseInt(value));
                  console.log(value.length == 0 ? "ok" : "sdsds");
                  setValueAf(parseInt(value) + parseInt(value) * 0.01);
                }}
              />
            </View>
          </View>
          <View style={{ marginHorizontal: 25, marginVertical: 25 }}>
            <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 18 }}>
              {value > 0 ? value : 0} FCFA
            </Text>
          </View>
          {route.params.operation == "Recharger mon solde" ? 
          <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "flex-end",
              marginHorizontal: 25,
              marginVertical: 20,
            }}
          >
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
              onPress={() => {
                handleCheck();
              }}
            >
              <View
                style={[
                  {
                    width: 20,
                    height: 20,
                    borderRadius: 75,
                  },
                  check
                    ? { backgroundColor: "#0066B5" }
                    : { borderColor: "black", borderWidth: 1 },
                ]}
              ></View>

              <Text style={{ fontFamily: "Nunito-Regular", fontSize: 18 }}>
                Je paie les frais 1%
              </Text>
            </Pressable>
          </View>

          <View style={{ marginHorizontal: 25, marginBottom: 50 }}>
            <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
              {check ? valueAf : value > 0 ? value : 0} FCFA
            </Text>
          </View>
        </>
          : (
            <>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginHorizontal: 25,
                  marginVertical: 20,
                }}
              >
                <Pressable
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                  onPress={() => {
                    handleCheck();
                  }}
                >
                  <View
                    style={[
                      {
                        width: 20,
                        height: 20,
                        borderRadius: 75,
                      },
                      check
                        ? { backgroundColor: "#0066B5" }
                        : { borderColor: "black", borderWidth: 1 },
                    ]}
                  ></View>

                  <Text style={{ fontFamily: "Nunito-Regular", fontSize: 18 }}>
                    Je paie les frais 1%
                  </Text>
                </Pressable>
              </View>

              <View style={{ marginHorizontal: 25, marginBottom: 50 }}>
                <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
                  {check ? valueAf : value > 0 ? value : 0} FCFA
                </Text>
              </View>
            </>
          )}

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <BtnItem
              text="Continuez"
              navigation={() =>
                navigate("code", {
                  type: "normal",
                  nav: navigate,
                  label: label,
                  img: img,
                  operation: route.params.operation,
                })
              }
            />
          </View>
        </View>
      )}
    />
  );
};

export default Opr2;

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 50 },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
  },
  txtPwd: {
    fontFamily: "Nunito-Medium",
    marginTop: 15,
    fontSize: 21,
    alignItems: "center",
    textAlign: "center",
  },

  icon: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
