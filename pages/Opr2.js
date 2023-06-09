import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import BtnItem from "../components/BtnItem";
import * as Contacts from "expo-contacts";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { FlashList } from "@shopify/flash-list";
import { Entypo } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const Opr2 = ({ route, navigation: { navigate } }) => {
  const { contactSelect, setContactSelect } = useContext(AuthContext);
 

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

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      {/* <Image
          source={img}
          style={{ width: 154, height: 154, marginVertical: 30 }}
        /> */}
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
      <Text style={styles.txtPwd}>Transférez votre argent</Text>

      <View style={{ gap: 23, marginVertical: 30 }}>
        {label == "VISA" ? (
          <>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                N° de carte:
              </Text>
              <TextInput
                style={styles.TextInput}
                placeholder="XXX XXX XXX 1234"
                keyboardType="numeric"
              />
            </View>

            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                Montant:
              </Text>
              <TextInput
                style={styles.TextInput}
                placeholder="0XXXXX"
                keyboardType="numeric"
              />
              <Text style={{ fontFamily: "Nunito-Bold", fontSize: 21 }}>
                XOF
              </Text>
            </View>
          </>
        ) : (
          <View style={{ alignItems: "center", gap: 15 }}>
            <TextInput
              style={styles.TextInput}
              placeholder="Montant du dépôt"
              keyboardType="numeric"
              onSubmitEditing={() =>
                navigate("code", {
                  type: "normal",
                })
              }
            />
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
                placeholder="Numéro de dépôt"
                keyboardType="numeric"
                onSubmitEditing={() =>
                  navigate("code", {
                    type: "normal",
                  })
                }
              />
            </View>
          </View>
        )}
      </View>
      <Pressable
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
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
      {/* <FlashList /> */}
      <Text
        style={{
          marginVertical: 10,
          fontFamily: "Nunito-Regular",
          color: "gray",
          marginLeft: 10,
        }}
      >
        Contacts sélectionnés
      </Text>

      {typeof contactSelect.phoneNumbers == "undefined" ? null : (
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 5
          }}
        >
          <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
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

      {/* <FlatList
        data={contacts}
        horizontal
        renderItem={({ item }) => (
          <View style={[{ marginRight: 10 }]}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "#C2D0E1",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 17 }}>{item.name.substr(0, 2)}</Text>
            </View>
            <Text>{item.name}</Text>
            <FlatList
              data={item.phoneNumbers}
              renderItem={({ item }) => <Text>{item.number}</Text>}
            />
          </View>
        )}
      /> */}
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 18 }}>
        <BtnItem
          text="Continuez"
          navigation={() =>
            navigate("code", {
              type: "normal",
              nav: navigate,
              label: label,
              img: img,
            })
          }
        />
      </View>
    </View>
  );
};

export default Opr2;

const styles = StyleSheet.create({
  container: { flex: 1 },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
    alignItems: "center",
    justifyContent: "center",
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
