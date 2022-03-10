import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import PostCard from '../../components/PostCard';

import {
  Container,
  SearchTitleWrapper,
  TextRegular,
  TextBold,
  Posts,
} from './styles';
import {postsData} from '../../services/posts';

export const Feed: React.FC = () => {
  return (
    <Container>
      <Header stackHeader={false} />
      <Text> Stories aqui !</Text>
      <Text> Stories aqui !</Text>
      <Text> Stories aqui !</Text>

      <SearchTitleWrapper>
        <TextRegular>Onde você </TextRegular>
        <TextBold>surfou hoje?</TextBold>
      </SearchTitleWrapper>
      <SearchInput />

      <Posts
        data={postsData}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <PostCard postData={item} />}
      />
    </Container>
  );
};
