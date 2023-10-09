import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import Data from "../components/Data";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { keyboard } = Data;

  const [nom, setNom] = useState("Inconnu.e");
  const [prenom, setPrenom] = useState("Prenom");
  const [email, setEmail] = useState("Inconnu@example.net");
  const [numero, setNumero] = useState("0123456789");
  const [date, setDate] = useState("XX/XX/XXXX");
  const [lieu, setLieu] = useState("Commune, Ville");
  const [code, setCode] = useState("");
  const [montant, setMontant] = useState(5);
  const [imageUser, setImageUser] = useState(
    require("../assets/user/userUnknow.png")
  );
  const [imageCNI_RectoBD, setImageCNI_RectoBD] = useState(null);
  const [imageCNI_VersoBD, setImageCNI_VersoBD] = useState(null);
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

  const tablVerif = [];
  while (tablVerif.length != 10) {
    let random = Math.floor(Math.random() * keyboard.length);
    let bol = true;
    for (let a = 0; a < tabl.length; a++) {
      if (tablVerif[a] == random) {
        bol = false;
      }
    }
    if (bol) {
      tablVerif.push(random);
    }
  }
  tablVerif.push(<AntDesign name="delete" size={22} color="black" />);
  tablVerif.splice(8, 0, null);

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
  const [scanned, setScanned] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        imageUser,
        email,
        nom,
        prenom,
        numero,
        code,
        date,
        lieu,
        montant,
        tabl,
        tablVerif,
        tablCode,
        validate,
        contactSelect,
        imageCNI_RectoBD,
        imageCNI_VersoBD,
        scanned,
        setContactSelect,
        setMontant,
        setCode,
        setNumero,
        setImageUser,
        setEmail,
        setNom,
        setPrenom,
        setDate,
        setLieu,
        setValidate,
        setImageCNI_RectoBD,
        setImageCNI_VersoBD,
        setScanned,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
