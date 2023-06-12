import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import BtnItem from "../components/BtnItem";
import * as Contacts from "expo-contacts";

SplashScreen.preventAutoHideAsync();

const Opr2 = ({ route, navigation: { navigate } }) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data[8];
          console.log(contact);
          setContacts(data);
        }
      }
    })();
  }, []);

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

  const { label, img } = route.params;

  return (
    <ScrollView>
      <View onLayout={onLayoutRootView} style={styles.container}>
        {/* <Image
          source={img}
          style={{ width: 154, height: 154, marginVertical: 30 }}
        /> */}
        <Text style={styles.txtPwd}>Transférez votre argent</Text>
        <FlatList
          data={contacts}
          horizontal
          ItemSeparatorComponent={() => {
            <View style={{ height: 100 }} />;
          }}
          renderItem={({ item, index }) => (
            <View
              style={[
                { backgroundColor: "red", flex: 1 },
               { marginRight: 10 } ,
              ]}
            >
              <View></View>
              <FlatList
                data={item.phoneNumbers}
                renderItem={({ item }) => <Text>{item.number}</Text>}
              />
              <Text>{item.name}</Text>
            </View>
          )}
        />
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
            <>
              <TextInput
                style={styles.TextInput}
                placeholder="Numéro du dépôt"
                keyboardType="numeric"
              />
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
            </>
          )}
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
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
    </ScrollView>
  );
};

export default Opr2;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
  },
  txtPwd: {
    fontFamily: "Nunito-Medium",
    marginTop: 15,
    fontSize: 21,
  },
});
