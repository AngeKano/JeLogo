import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
        setMontant,
        setCode,
        setNumero,
        setImageUser,
        setEmail,
        setNom,
        setDate,
        setLieu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
