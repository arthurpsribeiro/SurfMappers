import React from 'react';

import {useTheme} from 'styled-components';
import {Icon} from '../../Globals/Icon';

import {Container, TitleWrapper, Title, SubTitle} from './styles';

interface IAlbumInfoProps {
  title: string;
  date: string;
}

export const AlbumInfo: React.FC<IAlbumInfoProps> = ({title, date}) => {
  const theme = useTheme();

  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon iconName="share-2" border color={theme.colors.text} touchable />
      </TitleWrapper>
      <SubTitle>{date}</SubTitle>
    </Container>
  );
};
