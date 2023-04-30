import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const HistChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["8AM", "9AM", "10AM", "11AM", "12AM"],
          datasets: [
            {
              data: [
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random(),
              ],
            },
          ],
        }}
        width={300} // from react-native
        height={220}
        yAxisSuffix="000"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(197, 226, 245, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#0E9CFF",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default HistChart;

const styles = StyleSheet.create({});
