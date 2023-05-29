import { StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AvatarPermission from "../utilies/AvatarPermission";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/AuthContext";
import DateTimePicker from "@react-native-community/datetimepicker";

SplashScreen.preventAutoHideAsync();

const Compte = ({ navigation: { navigate } }) => {
  ///
  const [dateTime, setDateTime] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (selectedDate) => {
    setDateTime(new Date(selectedDate));
    setDate(dateTime.toLocaleDateString());
    setShow(false);
  };

  const showMode = () => {
    if (Platform.OS === "android") {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode("date");
  };

  ///

  const [modalVisible, setModalVisible] = useState(false);
  const {
    imageUser,
    email,
    nom,
    numero,
    date,
    lieu,
    setNumero,
    setImageUser,
    setEmail,
    setNom,
    setLieu,
    setDate,
  } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
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

  const handlePickUser = async () => {
    AvatarPermission.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUser(result.assets[0].uri);
    }
  };
  return (
    <View onPress={onLayoutRootView} style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredView}
        >
          <Pressable onPress={() => {}} style={styles.modalView}>
            <View style={styles.enTete}>
              <AntDesign name="edit" size={30} color="black" />
              <Text style={styles.txtLabel}>Modifier vos données</Text>
            </View>
            <View style={styles.listInputs}>
              <View style={styles.inputStyle}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Nom"
                  keyboardType="default"
                  onChangeText={(textNom) => {
                    setNom(textNom);
                  }}
                />
              </View>
              <View style={styles.inputStyle}>
                <AntDesign name="mail" size={24} color="black" />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  onChangeText={(textEmail) => {
                    setEmail(textEmail);
                  }}
                />
              </View>
              <View style={styles.inputStyle}>
                <AntDesign name="phone" size={24} color="black" />
                <TextInput
                  style={styles.TextInput}
                  placeholder={"Numero"}
                  keyboardType="numeric"
                  onChangeText={(textNumero) => {
                    setNumero(textNumero);
                  }}
                />
              </View>
              <View style={styles.inputStyle}>
                <MaterialIcons name="gps-fixed" size={24} color="black" />
                <TextInput
                  style={styles.TextInput}
                  placeholder={"Lieu"}
                  onChangeText={(textLieu) => {
                    setLieu(textLieu);
                  }}
                />
              </View>
              <Pressable
                onPress={() => {
                  showMode();
                }}
                style={styles.itmCalnd}
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
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={[styles.BtnPrinc, { marginBottom: 43 }]}
            >
              <Text style={styles.BtnPrincTxt}>Modifier</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      <Pressable
        style={styles.princUser}
        onPress={() => {
          handlePickUser();
        }}
      >
        <Image
          source={typeof imageUser == "number" ? imageUser : { uri: imageUser }}
          style={{ width: 125, height: 125, borderRadius: 100 }}
        />
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          style={styles.plus}
        />
        {/* <Text style={styles.txtName}>{nom}</Text> */}
      </Pressable>

      {/* <View style={styles.itemsInfos}>
        <View style={styles.itemIfon}>
          <AntDesign name="mail" size={24} color="black" />
          <Text style={styles.txtIfon}>{email}</Text>
        </View>
        <View style={styles.itemIfon}>
          <AntDesign name="phone" size={24} color="black" />
          <Text style={styles.txtIfon}>+225 {numero}</Text>
        </View>
        <View style={styles.itemIfon}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.txtIfon}>{date}</Text>
        </View>
        <View style={styles.itemIfon}>
          <MaterialIcons name="gps-fixed" size={24} color="black" />
          <Text style={styles.txtIfon}>{lieu}</Text>
        </View>
      </View> */}
      <View style={styles.itemsInfos}>
        <View style={styles.listInputs}>
          <View style={styles.inputStyle}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder="Nom"
              keyboardType="default"
              onChangeText={(textNom) => {
                setNom(textNom);
              }}
              value={nom}
            />
          </View>
          <View style={styles.inputStyle}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              onChangeText={(textEmail) => {
                setEmail(textEmail);
              }}
              value={email}
            />
          </View>
          <View style={styles.inputStyle}>
            <AntDesign name="phone" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder={"Numero"}
              keyboardType="numeric"
              onChangeText={(textNumero) => {
                setNumero(textNumero);
              }}
              value={numero}
            />
          </View>
          <View style={styles.inputStyle}>
            <MaterialIcons name="gps-fixed" size={24} color="black" />
            <TextInput
              style={styles.TextInput}
              placeholder={"Lieu"}
              onChangeText={(textLieu) => {
                setLieu(textLieu);
              }}
              value={lieu}
            />
          </View>
          <Pressable
            onPress={() => {
              showMode();
            }}
            style={styles.itmCalnd}
          >
            <View style={styles.btnCalnd}>
              <AntDesign name="calendar" size={24} color="black" />
            </View>
            <Text style={styles.txtCalnd}>{dateTime.toLocaleDateString()}</Text>
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

      <View style={styles.viewBtn}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Enregistrer</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigate("Accueil", {
              label: label,
            })
          }
          style={[
            styles.BtnPrinc,
            { backgroundColor: "none", borderColor: "#0372C1", borderWidth: 1 },
          ]}
        >
          <Text style={[styles.BtnPrincTxt, { color: "black" }]}>
            Supprimer le compte
          </Text>
        </Pressable>
        <Text style={styles.txtRec}>Compte crée le 25 Juin 2012</Text>
      </View>
    </View>
  );
};

export default Compte;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  // modal

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Regular",
    width: "80%",
  },
  modalView: {
    gap: 40,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 36,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  enTete: {
    alignItems: "center",
    flexDirection: "row",
    gap: 9,
  },
  txtLabel: {
    fontSize: 22,
    fontFamily: "Nunito-SemiBold",
  },
  listInputs: {
    gap: 25,
  },
  itmCalnd: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
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
  inputStyle: {
    flexDirection: "row",
    gap: 10,
  },

  ///
  princUser: {
    marginTop: 20,
    alignItems: "center",
  },
  plus: {
    position: "absolute",
    top: 100,
    left: 85,
    borderRadius: 20,
    backgroundColor: "white",
  },
  txtName: {
    marginTop: 17,
    fontSize: 30,
    fontFamily: "Nunito-Bold",
  },
  itemsInfos: {
    gap: 10,
  },
  itemIfon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
  },
  txtIfon: {
    fontSize: 20,
    fontFamily: "Nunito-Regular",
    color: "#6F6F70",
  },
  viewBtn: {
    marginVertical: 40,
    gap: 25,
  },
  BtnPrinc: {
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    minWidth: 200,
  },

  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 20,
    color: "white",
  },
  txtRec: {
    fontSize: 20,
    fontFamily: "Nunito-Regular",
    color: "#BDBDBD",
  },
});
