import React from 'react';

import {IAppStackParams} from '../../routes/app.stack.routes';

import {Header} from '../../components/Header';

import {
  Container,
  ScrollableContent,
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
  GalleryGrid,
  Photo,
} from './styles';

import {RouteProp, useRoute} from '@react-navigation/native';

type AlbumScreenRouteProps = RouteProp<IAppStackParams, 'Album'>;

export const Album: React.FC = () => {
  const route = useRoute<AlbumScreenRouteProps>();
  const {id, album_info, author, gallery} = route.params;

  return (
    <Container>
      <Header stackHeader screenName="Album" />

      <ScrollableContent>
        <AlbumInfo>
          <TitleWrapper>
            <Title>{album_info.title}</Title>
            <Icon name="share-2" />
          </TitleWrapper>
          <SubTitle>{album_info.date}</SubTitle>
        </AlbumInfo>

        <AuthorSection>
          <ProfileWrapper>
            <Icon name="camera" />
            <AuthorName>{author}</AuthorName>
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

        <GalleryGrid
          data={gallery}
          keyExtractor={(_, index) => index}
          renderItem={({item}) => <Photo source={{uri: item}} />}
        />
      </ScrollableContent>
    </Container>
  );
};
