import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Logo,
  IconsWrapper,
  Icon,
  BackButtonWrapper,
  BackButton,
  ScreenTitle,
} from './styles';

interface IHeaderProps {
  stackHeader: boolean;
  screenName?: 'string';
}

const Header: React.FC<IHeaderProps> = ({stackHeader, screenName}) => {
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
            <Icon name="chevron-left" style={{fontSize: 30}} />
          </BackButton>
          <ScreenTitle>{screenName || 'titulo'}</ScreenTitle>
        </BackButtonWrapper>
      )}
      <IconsWrapper stackHeader={stackHeader}>
        <Icon name="shopping-cart" />
        <Icon name="message-square" />
        {stackHeader && <Icon name="more-vertical" />}
      </IconsWrapper>
    </Container>
  );
};

export default Header;
