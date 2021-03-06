import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const CardTitle = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main};
  margin-bottom: 2px;
`;

export const CardSubtitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const CardSubtitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const SpotImage = styled.Image.attrs({
  resizemode: 'contain',
})`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: 8px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(60)}px;
`;

export const AuthorWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
`;

export const AuthorName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  margin-left: ${RFValue(5)}px;
`;
