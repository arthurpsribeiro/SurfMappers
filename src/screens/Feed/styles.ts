import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
// import {IPostData} from '../../services/posts';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const SearchTitleWrapper = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  margin-vertical: 10px;
`;

export const TextRegular = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
`;

export const TextBold = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
`;

export const Posts = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingVertical: 20},
})`
  padding-horizontal: 10px;
`;
