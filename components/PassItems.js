import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const DataPass = [
  {
    label: "Pass Mix",
    text: "Achat de pass mix pour un tiers",
    img: require("../assets/icons/iconpass/passmix.png"),
    height: 20,
    width: 23,
    credit: [
      {
        credTxt: "Pass 1 à 3 jours",
      },
      {
        credTxt: "Pass Semaine",
      },
      {
        credTxt: "Pass Mois",
      },
    ],
  },
  {
    label: "Pass Internet",
    text: "Achat de pass internet pour un tiers",
    img: require("../assets/icons/iconpass/passinternet.png"),
    height: 20,
    width: 20,
    credit: [
      {
        credTxt: "Pass 1 à 3 jours",
      },
      {
        credTxt: "Pass Semaine",
      },
      {
        credTxt: "Pass Mois",
      },
    ],
  },
  {
    label: "Pass Unité",
    text: "Transfère d’unité",
    img: require("../assets/icons/iconpass/unite.png"),
    height: 30.75,
    width: 16.49,
    credit: [
      {
        credTxt: "Pass 1 à 3 jours",
      },
      {
        credTxt: "Pass Semaine",
      },
      {
        credTxt: "Pass Mois",
      },
    ],
  },
];

const PassItems = ({navigate}) => {
  const [casPssMx, setCasPssMx] = useState(false);
  const [casPssIn, setCasPssIn] = useState(false);
  const [casPssUn, setCasPssUn] = useState(false);

  const [pce1, setPuce1] = useState(false);
  const [pce2, setPuce2] = useState(false);
  const [pce3, setPuce3] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigate("Princ")
    }, 500);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,.2)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              paddingVertical: 25,
              paddingHorizontal: 30,
              borderRadius: 25,
              gap: 15
            }}
          >
            <AntDesign name="checkcircleo" size={55} color="#1ACA56" />
            <Text
              style={{
                fontFamily: "Nunito-Medium",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Votre operation à bien été effectuée
            </Text>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DataPass}
        keyExtractor={(item, index) => item.label + index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              index == 0
                ? (setCasPssMx(!casPssMx),
                  setCasPssIn(false),
                  setCasPssUn(false))
                : index == 1
                ? (setCasPssIn(!casPssIn),
                  setCasPssMx(false),
                  setCasPssUn(false))
                : index == 2
                ? (setCasPssUn(!casPssUn),
                  setCasPssMx(false),
                  setCasPssIn(false))
                : null;
            }}
            style={styles.view}
          >
            <View style={styles.viewDsp}>
              <View style={styles.pass}>
                <Image
                  source={item.img}
                  style={[
                    styles.img,
                    { width: item.width, height: item.height },
                  ]}
                />
              </View>
              <Text style={styles.txt}>{item.text}</Text>
              <Image
                source={require("../assets/icons/iconpass/down.png")}
                style={{ width: 15.84, height: 7.09 }}
              />
            </View>

            <Pressable
              style={
                index == 0
                  ? [styles.container, { display: casPssMx ? null : "none" }]
                  : index == 1
                  ? [styles.container, { display: casPssIn ? null : "none" }]
                  : index == 2
                  ? [styles.container, { display: casPssUn ? null : "none" }]
                  : null
              }
            >
              <FlatList
                data={item.credit}
                renderItem={(credit) => (
                  <View>
                    <Pressable
                      onPress={() => {
                        credit.index == 0
                          ? (setPuce1(!pce1), setPuce2(false), setPuce3(false))
                          : credit.index == 1
                          ? (setPuce2(!pce2), setPuce1(false), setPuce3(false))
                          : credit.index == 2
                          ? (setPuce3(!pce3), setPuce1(false), setPuce2(false))
                          : null;
                      }}
                      style={styles.creditItm}
                    >
                      <View
                        style={
                          credit.index == 0
                            ? [
                                styles.puces,
                                {
                                  backgroundColor: pce1
                                    ? "#0372C1"
                                    : "rgba(123, 207, 255, 0.2)",
                                },
                              ]
                            : credit.index == 1
                            ? [
                                styles.puces,
                                {
                                  backgroundColor: pce2
                                    ? "#0372C1"
                                    : "rgba(123, 207, 255, 0.2)",
                                },
                              ]
                            : credit.index == 2
                            ? [
                                styles.puces,
                                {
                                  backgroundColor: pce3
                                    ? "#0372C1"
                                    : "rgba(123, 207, 255, 0.2)",
                                },
                              ]
                            : null
                        }
                      ></View>
                      <Text style={styles.credtxt}>{credit.item.credTxt}</Text>
                    </Pressable>
                  </View>
                )}
              />
              <View style={styles.txtInput}>
                <Text style={styles.txt225}>+225</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Numéro du depot"
                  keyboardType="numeric"
                  maxLength={10}
                  onSubmitEditing={() => {}}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => {
                    showModal();
                  }}
                  style={styles.BtnPrinc}
                >
                  <Text style={styles.BtnPrincTxt}>Validez</Text>
                </Pressable>
              </View>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PassItems;

const styles = StyleSheet.create({
  view: {
    gap: 25,
  },
  viewDsp: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  pass: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(123, 207, 255, 0.2)",
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
  },
  txt: {
    fontSize: 17,
    maxWidth: 248,
    fontFamily: "Nunito-Medium",
  },
  container: { flex: 1, gap: 30 },
  creditItm: {
    flex: 1,
    borderBottomColor: "rgba(123, 207, 255, 0.2)",
    borderBottomWidth: 2,
    paddingVertical: 13,
    alignItems: "center",
    flexDirection: "row",
    gap: 19,
    paddingHorizontal: 35,
  },
  puces: {
    width: 15,
    height: 15,

    borderRadius: 10,
  },
  credtxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 17,
  },
  txtInput: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
  },
  txt225: {
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },
  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 21,
    color: "white",
  },
  BtnPrinc: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
});
