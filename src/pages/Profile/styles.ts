import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px 20px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0 10px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 126px;
  height: 126px;
  border-radius: 98px;
  align-self: center;
`;
