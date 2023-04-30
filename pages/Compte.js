import { StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

const Compte = ({ navigation: { navigate } }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
  return (
    <View onPress={onLayoutRootView} style={styles.container}>
      {/* Modal */}
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
              <Image source={require("../assets/icons/modifIcon.png")} />
              <Text style={styles.txtLabel}>Modifier vos données</Text>
            </View>
            <View style={styles.listInputs}>
              <TextInput style={styles.TextInput} placeholder="Guy Espoire" />
              <TextInput
                style={styles.TextInput}
                placeholder="guyespoirkouman@gmail.com"
              />
              <TextInput
                style={styles.TextInput}
                placeholder="+225 0151831681"
                keyboardType="numeric"
              />
              <View style={styles.itmCalnd}>
                <Text style={styles.txtCalnd}>17 Mars 1978</Text>
                <View style={styles.btnCalnd}>
                  <Image source={require("../assets/icons/calendar.png")} />
                </View>
              </View>
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

      {/* endModal */}

      <View style={styles.princUser}>
        <Image
          source={require("../assets/icons/UserImageV1.png")}
          style={{ width: 125, height: 125 }}
        />
        <Image
          source={require("../assets/icons/plus.png")}
          style={styles.plus}
        />
        <Text style={styles.txtName}>Guy Espoir KOUMAN</Text>
      </View>
      <View style={styles.itemsInfos}>
        <View style={styles.itemIfon}>
          <Image
            source={require("../assets/icons/mail.png")}
            style={styles.mail}
          />
          <Text style={styles.txtIfon}>guyespoirkouman@gmail.com</Text>
        </View>
        <View style={styles.itemIfon}>
          <Image
            source={require("../assets/icons/phone.png")}
            style={styles.mail}
          />
          <Text style={styles.txtIfon}>+225 0707869131</Text>
        </View>
        <View style={styles.itemIfon}>
          <Image
            source={require("../assets/icons/calendar.png")}
            style={styles.mail}
          />
          <Text style={styles.txtIfon}>17 Mars 1978</Text>
        </View>
      </View>
      <View style={styles.viewBtn}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Modifier</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigate("Accueil", {
              label: label,
              img: img,
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
    gap: 33,
  },
  txtCalnd: {
    fontFamily: "Nunito-Regular",
  },
  btnCalnd: {
    padding: 8,
    backgroundColor: "rgba(3, 114, 193, 0.2)",
    borderRadius: 10,
  },

  ///
  princUser: {
    marginTop: 20,
    alignItems: "center",
  },
  plus: {
    position: "absolute",
    top: 100,
    left: 175,
    width: 20,
    height: 20,
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
