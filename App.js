import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data.js";
import Margin from "./src/Margin";
import Header from "./src/Header";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import Division from "./src/Division";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpend, setIsOpend] = useState(false);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpend(!isOpend);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => {
    return (
      <View>
        <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
          isMe={false}
          // 프로필 파일 boolean으로 조건부 재활용성 높임
        />
      </View>
    );
  };

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpend={isOpend}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpend ? friendProfiles : []}
        // FlatList의 소스를 담을 공간
        keyExtractor={(_, index) => index}
        // 아이템에 고유의 키를 주는 속성
        ItemSeparatorComponent={ItemSeparatorComponent}
        stickyHeaderIndices={[0]}
        // 헤더 고정할 index를 넣기

        renderItem={renderItem}
        // data로 받은 소스의 item들을 통해 render시켜주는 콜백 함수
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsVerticalScrollIndicator={false}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );

  const ListFooterComponent = () => null;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <FriendList data={friendProfiles} isOpened={isOpend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
