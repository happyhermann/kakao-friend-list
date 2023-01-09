import { View, Image, Text } from "react-native";
import styled from "styled-components/native";
import Margin from "./Margin";

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 2}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
  font-size: ${(props) => (props.isMe ? 16 : 15)}px;
`;

const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)}px;
  color: gery;
`;

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  // 조건부 style 커스텀

  return (
    <Container style={{ flexDirection: "row", backgroundColor: "white" }}>
      <ProfileImage source={{ uri }} size={size} />
      {/* styled component로 props넘겨주기 가능 */}
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};
