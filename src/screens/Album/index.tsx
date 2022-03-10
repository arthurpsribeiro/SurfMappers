import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  AlbumInfo,
  TitleWrapper,
  Title,
  Icon,
  IconBorderless,
  SubTitle,
  AuthorSection,
  ProfileWrapper,
  AuthorName,
  ButtonsWrapper,
  FollowButton,
  FollowButtonTitle,
  PicturesInfo,
  PicturesAmount,
  FilterButton,
  FilterButtonText,
  AlbumTime,
} from './styles';

export const Album: React.FC = () => {
  return (
    <Container>
      <Header stackHeader screenName="Album" />

      <AlbumInfo>
        <TitleWrapper>
          <Title>Praia do Meio, Natal-RN </Title>
          <Icon name="share-2" />
        </TitleWrapper>
        <SubTitle>Sábado, 17 abril 2021 - 07 às 10h </SubTitle>
      </AlbumInfo>

      <AuthorSection>
        <ProfileWrapper>
          <Icon name="camera" />
          <AuthorName>Manoel</AuthorName>
        </ProfileWrapper>

        <ButtonsWrapper>
          <Icon name="message-square" />
          <FollowButton>
            <FollowButtonTitle>Seguindo</FollowButtonTitle>
          </FollowButton>
        </ButtonsWrapper>
      </AuthorSection>

      <PicturesInfo>
        <PicturesAmount>260 fotos</PicturesAmount>
        <FilterButton>
          <IconBorderless name="filter" />
          <FilterButtonText>Filtrar por surfista</FilterButtonText>
          <IconBorderless name="chevron-down" />
        </FilterButton>
      </PicturesInfo>

      <AlbumTime>6h - 7h</AlbumTime>
    </Container>
  );
};
