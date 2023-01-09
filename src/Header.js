import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, bgColor }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }}
      // 스티알 밖에 터치범위 추가로 주는 것
      style={{ paddingHorizontal: 6, backgroundColor: bgColor }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};
// expo icons

export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>

      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" bgColor="lightblue" />
        <IconButton name="person-add-outline" bgColor="lightgreen" />
        <IconButton name="md-musical-notes-outline" bgColor="lightblue" />
        <IconButton name="ios-settings-outline" bgColor="lightgreen" />
      </View>
    </View>
  );
};
