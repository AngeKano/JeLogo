import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import BtnItem from "../components/BtnItem";
import CustVerifItems from "../components/CustVerifItems";

const Identification = ({ navigation: { navigate } }) => {
  ////
  const [nomL, setNomL] = useState(nom);
  const [prenomL, setPrenomL] = useState(prenom);
  const [emailL, setEmailL] = useState(email);
  const [dateL, setDateL] = useState(date);

  ////
  ///
  const [isMal, setMale] = useState(true);
  const [isMlle, setMlle] = useState(false);
  const [isMme, setMme] = useState(false);

  /////
  const [dateTime, setDateTime] = useState(new Date(Date.now()));

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (selectedDate) => {
    setDateTime(new Date(selectedDate));
    setShow(false);
    setDate(dateTime.toLocaleDateString());
  };

  const showMode = () => {
    if (Platform.OS === "android") {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode("date");
  };
  ///

  //////
  const { email, nom, prenom, date, setEmail, setNom, setPrenom, setDate } =
    useContext(AuthContext);
  /////
  ////
  const handle = () => {
    setNom(nomL);
    setPrenom(prenomL);
    setEmail(emailL);
    setDate(dateL);
  };
  ////
  ////
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    } catch {
      console.log("Erreur de police");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  ///
  return (
    <ScrollView>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <CustVerifItems text="Informations personnelles" />
        <View style={{ marginVertical: 30, gap: 20 }}>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Pressable
              onPress={() => {
                setMlle(false);
                setMme(false);
                setMale(true);
              }}
              style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
            >
              <Text style={{ fontFamily: "Nunito-Regular", fontSize: 17 }}>
                M
              </Text>
              <View
                style={[
                  {
                    width: 20,
                    height: 20,
                    borderRadius: 75,
                  },
                  isMal
                    ? { backgroundColor: "#0066B5" }
                    : { borderColor: "black", borderWidth: 1 },
                ]}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setMlle(false);
                setMme(true);
                setMale(false);
              }}
              style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
            >
              <Text style={{ fontFamily: "Nunito-Regular", fontSize: 17 }}>
                Mme
              </Text>
              <View
                style={[
                  {
                    width: 20,
                    height: 20,
                    borderRadius: 75,
                  },
                  isMme
                    ? { backgroundColor: "#0066B5" }
                    : { borderColor: "black", borderWidth: 1 },
                ]}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setMlle(true);
                setMme(false);
                setMale(false);
              }}
              style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
            >
              <Text style={{ fontFamily: "Nunito-Regular", fontSize: 17 }}>
                Mlle
              </Text>
              <View
                style={[
                  {
                    width: 20,
                    height: 20,
                    borderRadius: 75,
                  },
                  isMlle
                    ? { backgroundColor: "#0066B5" }
                    : { borderColor: "black", borderWidth: 1 },
                ]}
              />
            </Pressable>
          </View>

          <View style={styles.inputStyle}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder="Nom"
              keyboardType="default"
              onChangeText={(textNom) => {
                setNomL(textNom);
              }}
            />
          </View>
          <View style={styles.inputStyle}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder="Prenom"
              keyboardType="default"
              onChangeText={(textNom) => {
                setPrenomL(textNom);
              }}
            />
          </View>
          <View style={styles.inputStyle}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              onChangeText={(textEmail) => {
                setEmailL(textEmail);
              }}
            />
          </View>

          <View style={{ gap: 15 }}>
            <Text style={{ fontFamily: "Nunito-Regular", fontSize: 20 }}>
              Date de naissance
            </Text>
            <Pressable
              onPress={() => {
                showMode();
              }}
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <View style={styles.btnCalnd}>
                <AntDesign name="calendar" size={24} color="black" />
              </View>
              <Text style={styles.txtCalnd}>
                {dateTime.toLocaleDateString()}
              </Text>
            </Pressable>
            {show ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateTime}
                dateFormat="day month year"
                mode={mode}
                is24Hour={true}
                onChange={(e) => {
                  onChange(e.nativeEvent.timestamp);
                }}
              />
            ) : null}
          </View>
        </View>
        <View style={{ marginBottom: 15 }}>
          <BtnItem
            text="Continuer"
            navigation={() => {
              handle(), navigate("Condrat");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Identification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height * 0.1,
  },
  inputStyle: {
    flexDirection: "row",
    gap: 10,
  },

  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Regular",
    width: "80%",
  },

  txtCalnd: {
    fontFamily: "Nunito-Regular",
    fontSize: 20,
  },
  btnCalnd: {
    padding: 8,
    backgroundColor: "rgba(3, 114, 193, 0.2)",
    borderRadius: 10,
  },
});
