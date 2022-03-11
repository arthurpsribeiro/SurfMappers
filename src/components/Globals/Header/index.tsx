import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Icon} from '../Icon';

import {
  Container,
  Logo,
  IconsWrapper,
  BackButtonWrapper,
  BackButton,
  ScreenTitle,
} from './styles';

interface IHeaderProps {
  stackHeader: boolean;
  screenName?: 'string';
}

export const Header: React.FC<IHeaderProps> = ({stackHeader, screenName}) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {!stackHeader ? (
        <Logo
          source={{
            uri: 'https://surfmappers.com/static/images/surfmappers_logo_ss.png',
          }}
        />
      ) : (
        <BackButtonWrapper>
          <BackButton onPress={handleBackButton}>
            <Icon iconName="chevron-left" size={24} />
          </BackButton>
          <ScreenTitle>{screenName || 'titulo'}</ScreenTitle>
        </BackButtonWrapper>
      )}
      <IconsWrapper stackHeader={stackHeader}>
        <Icon iconName="shopping-cart" size={16} touchable />
        <Icon iconName="message-square" size={16} touchable />
        {stackHeader && <Icon iconName="more-vertical" size={16} touchable />}
      </IconsWrapper>
    </Container>
  );
};
