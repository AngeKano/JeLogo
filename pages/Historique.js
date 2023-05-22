import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback, memo } from "react";
import HistChart from "../components/HistChart";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ShowCash from "../components/ShowCash";
import ItemDate from "../components/ItemDate";
import ItemOperat from "../components/ItemOperat";
import Data from "../components/Data";

SplashScreen.preventAutoHideAsync();

const Historique = ({ navigation: { navigate } }) => {
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

  const { Data_Null } = Data;

  const Header = () => {
    return (
      <View onLayout={onLayoutRootView} style={styles.container}>
        <View style={styles.Solde}>
          <ShowCash />
        </View>
        <View style={styles.Ctn}>
          <Text style={styles.histTxt}>Historique des transactions</Text>
          <View style={styles.scrollH}>
            <ItemDate date />
          </View>
          <View style={styles.chart}>
            <HistChart />
          </View>
          <View style={styles.txtDps}>
            <Text style={styles.txt1}>Dépenses Avril 2023</Text>
            <Text style={styles.txt2}>Rechargements : 123 790 XOF</Text>
            <Text style={styles.txt3}>Dépenses : 122 300 XOF</Text>
            <Text style={styles.txt4}>Solde initial : 1 530 XOF</Text>
          </View>
          <View style={styles.scrollH}>
            <ItemDate />
          </View>
          <Text style={styles.Auj}>Aujourd’hui</Text>
          <View style={styles.listTranssc}>
            <ItemOperat />
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={Data_Null} renderItem={() => <Header />} />;
};

export default memo(Historique);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0372C1",
  },
  Solde: {
    flex: 1,
  },
  Ctn: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  scrollH: {
    marginVertical: 30,
  },
  chart: {
    alignItems: "center",
  },
  histTxt: {
    fontFamily: "Nunito-Bold",
    fontSize: 25,
    textAlign: "left",
    maxWidth: 193,
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 39,
  },
  txtDps: {
    marginTop: 45,
    marginHorizontal: 39,
    gap: 13,
  },
  txt1: {
    fontFamily: "Nunito-Bold",
    fontSize: 19,
  },
  txt2: {
    fontFamily: "Nunito-SemiBold",
  },
  txt3: {
    fontFamily: "Nunito-SemiBold",
  },
  txt4: {
    fontFamily: "Nunito-Bold",
  },
  Auj: {
    fontFamily: "Nunito-Regular",
    marginHorizontal: 39,
    marginVertical: 15,
    color: "#4F4F4F",
  },
  listTranssc: {
    marginBottom: 40,
  },
});
