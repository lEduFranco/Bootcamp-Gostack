import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  Logoff,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ClientButton,
  ClientButtonText,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProviderIcon,
  ProviderEdit,
  ProviderDelete,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  useEffect(() => {
    api.get('Providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <Logoff>
          <Icon onPress={signOut} name="power" size={25} color="#fff" />
        </Logoff>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={<ProvidersListTitle>Diaristas</ProvidersListTitle>}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar source={{ uri: provider.avatar_url }} />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" size={14} color="#3f1229" />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" size={14} color="#3f1229" />
                <ProviderMetaText>8h às 17h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>

            <ProviderIcon>
              <ProviderEdit onPress={() => navigation.navigate('Profile')}>
                <Icon name="edit-2" size={23} color="#3f1229" />
              </ProviderEdit>
            </ProviderIcon>

            <ProviderIcon>
              <ProviderDelete>
                <Icon name="trash-2" size={23} color="#3f1229" />
              </ProviderDelete>
            </ProviderIcon>
          </ProviderContainer>
        )}
      />

      <ClientButton onPress={() => navigation.navigate('ListClient')}>
        <Icon name="user" size={20} color="#b28d9f" />
        <ClientButtonText>Clientes</ClientButtonText>
      </ClientButton>
    </Container>
  );
};

export default Dashboard;
