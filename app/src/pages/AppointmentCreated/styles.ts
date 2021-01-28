import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #3f1229;
  font-family: 'RobotoSlab-Medium';
  margin-top: 48px;
  text-align: center;
`;
export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
`;
export const OkButton = styled(RectButton)`
  background: #b28d9f;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;
export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Madium';
  color: #3f1229;
`;
