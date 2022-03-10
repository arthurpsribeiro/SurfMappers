import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IAppStackParams} from '../../routes/app.stack.routes';

import {
  Container,
  CardTitle,
  CardSubtitleWrapper,
  CardSubtitle,
  Icon,
  SpotImage,
  CardFooter,
  IconsWrapper,
  AuthorWrapper,
  AuthorName,
} from './styles';

interface IPostCardProps {
  postData: {
    id: number;
    album_info: {
      title: string;
      date: string;
    };
    author: string;
    gallery: string[];
  };
}

const PostCard: React.FC<IPostCardProps> = ({postData}) => {
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
        <Icon name="more-vertical" />
      </CardSubtitleWrapper>
      <SpotImage source={{uri: postData.thumbnail}} />

      <CardFooter>
        <IconsWrapper>
          <Icon name="heart" />
          <Icon name="share-2" />
        </IconsWrapper>
        <AuthorWrapper>
          <Icon name="camera" />
          <AuthorName>{postData.author}</AuthorName>
        </AuthorWrapper>
      </CardFooter>
    </Container>
  );
};

export default PostCard;
