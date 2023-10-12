import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AuthContext } from "../context/AuthContext";

export default function App({ navigation: { navigate } }) {
  const [hasPermission, setHasPermission] = useState(null);
  const { scanned, setScanned } = useContext(AuthContext);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigate("DrawerNav");
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : navigate("DrawerNav")}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.scan}></View>
      <Text style={styles.txt}>Scanner le QR Code</Text>
      <StatusBar style="auto" />
      {scanned && (setScanned(false), navigate("DrawerNav"))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 30,
  },
  scan: {
    width: 250,
    height: 250,
    borderColor: "white",
    borderWidth: 2.5,
    borderRadius: 10,
  },
  txt: {
    fontSize: 20,
    fontFamily: "Nunito-Medium",
    color: "white",
  },
});
