import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, memo } from "react";
import BtnItem from "./BtnItem";

const renderItem = (data, item, navigate) => {
  return (
    <Pressable
      style={{
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: data.backgroundColor,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
      }}
      onPress={() =>
        navigate("Abonement", {
          option: item.option,
          nom: data.nom,
          backgroundColor: data.backgroundColor,
          textColor: data.textColor,
        })
      }
    >
      <Text style={{ fontFamily: "Nunito-Medium", fontSize: 20 }}>
        {item.Label}
      </Text>
      <AntDesign name="right" size={24} color="black" />
    </Pressable>
  );
};

const renderItemFalse = (item) => {
  
  return (
    <View
      style={{
        alignItems: "center",
        marginVertical: 25,
        gap: 10,
      }}
    >
      <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 17 }}>
        {item.Etape}
      </Text>
      <TextInput
        style={[
          styles.TextInput,
          {
            width: item.Etape == "Code secret" ? "13%" : "37%",
          },
        ]}
        placeholder={item.Etape == "Code secret" ? "* * * *" : "0X XX XX XX XX"}
        keyboardType="numeric"
        secureTextEntry={item.Etape == "Code secret" ? true : false}
        maxLength={item.Etape == "Code secret" ? 4 : 10}
        onSubmitEditing={() => showModal()}
      />
    </View>
  );
};

const AbnItems = ({ data, navigate }) => {
  const [btnVisible, setBtnVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  console.log(data);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigate("Princ");
    }, 800);
  };

  return (
    <>
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
              gap: 15,
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
        data={data.option}
        renderItem={({ item }) =>
          Object.keys(item).length == 2
            ? renderItem(data, item, navigate)
            : renderItemFalse(item)
        }
      />

      {btnVisible ? (
        <View style={{ marginTop: 20 }}>
          <BtnItem navigation={() => showModal()} text="Confirmer" />
        </View>
      ) : null}
    </>
  );
};

export default memo(AbnItems);

const styles = StyleSheet.create({
  visible: {
    flex: 1,
    display: "flex",
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },
  BtnPrinc: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: "center",
  },
  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 21,
    color: "white",
  },
});
