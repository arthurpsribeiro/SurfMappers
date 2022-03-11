import {FlatList, FlatListProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {IStoriesData} from '../../services/stories';
import Feather from 'react-native-vector-icons/Feather';
import {BorderlessButton} from 'react-native-gesture-handler';
// import {IPostData} from '../../services/posts';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  /* margin-bottom: 10px; */
`;

export const NewStorie = styled(BorderlessButton)`
  height: 100%;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const StorieCircle = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme}) => theme.colors.main};
  border-radius: 45px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.main};
`;

export const AddStorieText = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.main};
`;

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

    // height: RFValue(80),
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
