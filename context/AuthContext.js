import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import Data from "../components/Data";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { keyboard } = Data;

  const [nom, setNom] = useState("Inconnu.e");
  const [email, setEmail] = useState("Inconnu@example.net");
  const [numero, setNumero] = useState("0123456789");
  const [date, setDate] = useState("XX/XX/XXXX");
  const [lieu, setLieu] = useState("Commune, Ville");
  const [code, setCode] = useState("");
  const [montant, setMontant] = useState(5);
  const [imageUser, setImageUser] = useState(
    require("../assets/user/userUnknow.png")
  );
  //

  const tabl = [];
  while (tabl.length != 10) {
    let random = Math.floor(Math.random() * keyboard.length);
    let bol = true;
    for (let a = 0; a < tabl.length; a++) {
      if (tabl[a] == random) {
        bol = false;
      }
    }
    if (bol) {
      tabl.push(random);
    }
  }
  tabl.push(<AntDesign name="delete" size={22} color="black" />);
  tabl.splice(
    8,
    0,
    <FontAwesome5 name="fingerprint" size={22} color="black" />
  );

  //
  const tablCode = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    null,
    8,
    9,
    <AntDesign name="delete" size={22} color="black" />,
  ];

  const [validate, setValidate] = useState(false);
  const [contactSelect, setContactSelect] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        imageUser,
        email,
        nom,
        numero,
        code,
        date,
        lieu,
        montant,
        tabl,
        tablCode,
        validate,
        contactSelect,
        setContactSelect,
        setMontant,
        setCode,
        setNumero,
        setImageUser,
        setEmail,
        setNom,
        setDate,
        setLieu,
        setValidate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
