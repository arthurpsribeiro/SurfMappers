import React from 'react';

import {IAppStackParams} from '../../routes/app.stack.routes';

import {Header} from '../../components/Globals/Header';

import {
  Container,
  ScrollableContent,
  AlbumTime,
  GalleryGrid,
  Photo,
} from './styles';

import {RouteProp, useRoute} from '@react-navigation/native';
import {AlbumInfo} from '../../components/Album/AlbumInfo';
import {AuthorSection} from '../../components/Album/AuthorSection';
import {PicturesInfo} from '../../components/Album/PicturesInfo';

type AlbumScreenRouteProps = RouteProp<IAppStackParams, 'Album'>;

export const Album: React.FC = () => {
  const route = useRoute<AlbumScreenRouteProps>();
  const {id, album_info, author, gallery} = route.params;

  return (
    <Container>
      <Header stackHeader screenName="Album" />

      <ScrollableContent>
        <AlbumInfo title={album_info.title} date={album_info.title} />

        <AuthorSection author={author} />

        <PicturesInfo />

        <AlbumTime>6h - 7h</AlbumTime>

        <GalleryGrid
          data={gallery}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item}) => <Photo source={{uri: item}} />}
        />
      </ScrollableContent>
    </Container>
  );
};
