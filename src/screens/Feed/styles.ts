import styled from 'styled-components/native';

import {FlatList, FlatListProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {IStoriesData} from '../../services/stories';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const StoriesList = styled(
  FlatList as new (
    props: FlatListProps<IStoriesData>,
  ) => FlatList<IStoriesData>,
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
})`
  width: 100%;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.background_primary};
  // background-color: ${({theme}) => theme.colors.main};
`;

export const SearchTitleWrapper = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  margin: 15px 0 10px;
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
