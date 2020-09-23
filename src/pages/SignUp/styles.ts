import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 10px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
