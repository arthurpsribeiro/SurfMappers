import React from 'react';

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

import {useNavigation} from '@react-navigation/native';

interface IPostCardProps {
  postData: {
    id: number;
    place: string;
    date: string;
    thumbnail: string;
    gallery: string[];
  };
}

const PostCard: React.FC<IPostCardProps> = ({postData}) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Album')}>
      <CardTitle>{postData.place}</CardTitle>
      <CardSubtitleWrapper>
        <CardSubtitle>{postData.date}</CardSubtitle>
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
          <AuthorName>yurigargarin</AuthorName>
        </AuthorWrapper>
      </CardFooter>
    </Container>
  );
};

export default PostCard;
