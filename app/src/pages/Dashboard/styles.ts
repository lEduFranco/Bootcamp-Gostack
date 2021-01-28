import styled from 'styled-components/native';
/* import { getStatusBarHeight } from 'react-native-iphone-x-helper'; Para Iphone */
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  /* padding-top: '   '  + 24}px; Para Iphone */
  background: #b28d9f;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f5f5f5;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #3f1229;
  font-family: 'RobotoSlab-Medium';
`;
export const Logoff = styled.Text``;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #000;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 0 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-size: 36px;
  margin-bottom: 24px;
  color: #3f1229;
  margin-top: 10px;
  font-family: 'RobotoSlab-Medium';
`;

export const ClientButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f5f5f5;
  border-top-width: 1px;
  border-color: #b28f9f;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ClientButtonText = styled.Text`
  color: #b28d9f;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ProviderContainer = styled(RectButton)`
  background: #b28d9f;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f5f5f5;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #f5f5f5;
  font-family: 'RobotoSlab-Regular';
`;

export const ProviderIcon = styled.Text`
  width: 40px;
  height: 30px;
  padding-left: 18px;
`;
export const ProviderEdit = styled.Text``;
export const ProviderDelete = styled.Text``;
