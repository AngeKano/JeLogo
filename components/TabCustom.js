import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const TabCustom = ({ state, descriptors, navigation }) => {
  console.log(state);
  console.log(descriptors);
  console.log(navigation);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "#171717",
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 20,
        paddingVertical: 5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {label == "Acceuil" ? (
              <Entypo
                name="home"
                size={24}
                color={isFocused ? "#0372C1" : "#222"}
              />
            ) : (
              <Entypo
                name="credit-card"
                size={24}
                color={isFocused ? "#0372C1" : "#222"}
              />
            )}
            <Text
              style={{
                color: isFocused ? "#0372C1" : "#222",
                fontFamily: "Nunito-SemiBold",
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
      {/* {state.routes.map((item) => {
        // const isFocused = state.index === index;
        const onPress = () => {
          navigation.emit({
            type: "tabPress",
            target: item.key,
            canPreventDefault: true,
          });
        };
        return (
          <Pressable
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => {
              onPress;
            }}
          >
            {item.name == "Acceuil" ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <Entypo name="credit-card" size={24} color="black" />
            )}
            <Text style={{ fontFamily: "Nunito-Regular" }}>{item.name}</Text>
          </Pressable>
        );
      })} */}
    </View>
  );
};

export default TabCustom;

const styles = StyleSheet.create({});