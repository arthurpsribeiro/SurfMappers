import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const photoWidth = width / 3;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const ScrollableContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const AlbumTime = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};

  padding: 15px 20px;
`;

export const GalleryGrid = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  nestedScrollEnabled: true,

  columnWrapperStyle: {justifyContent: 'space-between'},
  numColumns: 3,
})``;

export const Photo = styled.Image.attrs({
  resizemode: 'contain',
})`
  width: ${photoWidth - 2}px;
  height: ${photoWidth - 2}px;
`;
