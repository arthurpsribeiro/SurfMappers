import React from 'react';

import {Header} from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import {PostCard} from '../../components/PostCard';
import {Storie} from '../../components/Storie';

import {storiesData} from '../../services/stories';

import {
  Container,
  Content,
  NewStorie,
  StorieCircle,
  Icon,
  AddStorieText,
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
              return (
                <NewStorie>
                  <StorieCircle>
                    <Icon name="camera" />
                  </StorieCircle>
                  <AddStorieText>Adicionar</AddStorieText>
                </NewStorie>
              );
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
