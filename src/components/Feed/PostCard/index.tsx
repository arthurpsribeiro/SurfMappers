import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IAppStackParams} from '../../../routes/app.stack.routes';

import {
  Container,
  CardTitle,
  CardSubtitleWrapper,
  CardSubtitle,
  SpotImage,
  CardFooter,
  IconsWrapper,
  AuthorWrapper,
  AuthorName,
} from './styles';
import {Icon} from '../../Globals/Icon';

interface IPostCardProps {
  postData: {
    id: number;
    album_info: {
      title: string;
      date: string;
    };
    post_info: {
      title: string;
      date: string;
    };
    thumbnail: string;
    author: string;
    gallery: string[];
  };
}

export const PostCard: React.FC<IPostCardProps> = ({postData}) => {
  const navigation = useNavigation<StackNavigationProp<IAppStackParams>>();

  const handleAlbumSelected = () => {
    navigation.navigate('Album', {
      id: postData.id,
      album_info: postData.album_info,
      author: postData.author,
      gallery: postData.gallery,
    });
  };

  return (
    <Container onPress={handleAlbumSelected}>
      <CardTitle>{postData.post_info.title}</CardTitle>
      <CardSubtitleWrapper>
        <CardSubtitle>{postData.post_info.date}</CardSubtitle>
        <Icon iconName="more-vertical" touchable />
      </CardSubtitleWrapper>
      <SpotImage source={{uri: postData.thumbnail}} />

      <CardFooter>
        <IconsWrapper>
          <Icon iconName="heart" touchable />
          <Icon iconName="share-2" touchable />
        </IconsWrapper>
        <AuthorWrapper>
          <Icon iconName="camera" touchable />
          <AuthorName>{postData.author}</AuthorName>
        </AuthorWrapper>
      </CardFooter>
    </Container>
  );
};
