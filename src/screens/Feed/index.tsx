import React from 'react';

import {Header} from '../../components/Globals/Header';
import {NewStorie} from '../../components/Feed/NewStorie';
import {Storie} from '../../components/Feed/Storie';
import {SearchInput} from '../../components/Feed/SearchInput';
import {PostCard} from '../../components/Feed/PostCard';

import {storiesData} from '../../services/stories';

import {
  Container,
  Content,
  StoriesList,
  SearchTitleWrapper,
  TextRegular,
  TextBold,
} from './styles';
import {postsData} from '../../services/posts';

export const Feed: React.FC = () => {
  return (
    <Container>
      <Header stackHeader={false} />

      <Content>
        <StoriesList
          data={storiesData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            if (index === 0) {
              return <NewStorie />;
            }
            return (
              <Storie
                username={item.username}
                photo={item.photo}
                visualized={item.visualized}
              />
            );
          }}
        />

        <SearchTitleWrapper>
          <TextRegular>Onde você </TextRegular>
          <TextBold>surfou hoje?</TextBold>
        </SearchTitleWrapper>
        <SearchInput />

        {postsData.map(item => {
          return <PostCard postData={item} />;
        })}
      </Content>
    </Container>
  );
};
