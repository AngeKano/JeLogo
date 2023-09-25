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
import React, { useState, memo, useContext } from "react";
import BtnItem from "./BtnItem";
import { AuthContext } from "../context/AuthContext";

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

const VirItems = ({ data, navigate }) => {
  const { validate } = useContext(AuthContext);
  const renderItemFalse = (item) => {
    return (
      <View
        style={{
          marginVertical: 7,
          marginHorizontal: 7,
          gap: 3,
        }}
      >
        <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 17 }}>
          {item.Etape}
        </Text>
        <TextInput
          style={[styles.TextInput]}
          placeholder={item.Placeholder}
          placeholderTextColor={'gray'}
          keyboardType={item.Etape == "Nom du compte" ? "default" : "numeric"}
          secureTextEntry={item.Etape == "Code secret" ? true : false}
          maxLength={item.Etape == "Code secret" ? 4 : 14}
          onSubmitEditing={() => navigate("code")}
        />
        {/* {validate == false ? (
          <View style={{ marginTop: 20 }}>
            <BtnItem
              navigation={() =>
                navigate("code", {
                  type: "normal",
                })
              }
              text="Confirmer"
            />
          </View>
        ) : null} */}
      </View>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigate("Princ");
    }, 800);
  };
  return (
    <>
      <Modal animationType="fade" transparent visible={modalVisible}>
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
              Votre opération a bien été effectuée
            </Text>
          </View>
        </View>
      </Modal>

      <FlatList
        data={data.option}
        style={{ marginVertical: 27 }}
        renderItem={({ item }) =>
          Object.keys(item).length == 2
            ? renderItemFalse(item)
            : renderItem(data, item, navigate)
        }
      />
    </>
  );
};

export default memo(VirItems);

const styles = StyleSheet.create({
  visible: {
    flex: 1,
    display: "flex",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Medium",
    width: "auto",
    padding: 7,
    borderRadius: 7,
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
