import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  StatusBar,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useState,
  memo,
  useEffect,
} from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import VerifItemCode from "../components/VerifItemCode";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import BtnItem from "../components/BtnItem";
import { AntDesign } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";
import { FlashList } from "@shopify/flash-list";

SplashScreen.preventAutoHideAsync();

const ContactsScreen = ({ route, navigation }) => {
  const { contactSelect, setContactSelect } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // const contact = data[8];
          // console.log(contact);
          data.map((item) => {
            if (item.phoneNumbers == undefined) {
              console.log(item);
              console.log("Numero Iconnu");
            }
          });
        }
      }
    })();
  }, []);
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

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar />
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          alignItems: "center",
          gap: 25,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
        <Text style={{ fontSize: 18, fontFamily: "Nunito-Bold" }}>
          Séléctionnez le numéro
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#ABB0BC",
          paddingVertical: 7,
        }}
      >
        <AntDesign
          name="search1"
          size={20}
          style={{ marginLeft: 10 }}
          color="black"
        />
        <TextInput
          placeholder="Entrez un nom ou un numéro"
          style={{ fontFamily: "Nunito-Medium", flex: 1, fontSize: 18 }}
        />
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text
          style={{
            marginLeft: 15,
            fontFamily: "Nunito-Regular",
            color: "gray",
          }}
        >
          Contacts récents
        </Text>
        <FlatList />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 15,
            fontFamily: "Nunito-Bold",
            marginBottom: 15,
            fontSize: 18,
          }}
        >
          Contacts
        </Text>
        <View style={{ height: "100%", width: "100%" }}>
          <FlashList
            data={contacts}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  {
                    marginLeft: 10,
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  },
                ]}
                onPress={() => {
                  navigation.setParams(setContactSelect(item));
                  navigation.goBack();
                }}
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
                    {item.name.substr(0, 2)}
                  </Text>
                </View>
                <Text style={{ fontFamily: "Nunito-Medium" }}>{item.name}</Text>
              </Pressable>
            )}
            estimatedItemSize={70}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(ContactsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
});
