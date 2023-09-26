import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Camera } from "expo-camera";

export default function App({ navigation: { navigate } }) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      <View style={styles.scan}></View>
      <Text style={styles.txt}>Scanner le QR Code</Text>
      <StatusBar style="auto" />
      {scanData && navigate("DrawerNav")}
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
