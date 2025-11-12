import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const index = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 200,
      }}
    >
      <Text>index</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>ToggleDark</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
