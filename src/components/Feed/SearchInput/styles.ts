import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';

import {Platform} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  margin-horizontal: 20px;
  padding-vertical: ${Platform.OS === 'ios' ? 10 : 0}px;
  padding-horizontal: 8px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  margin-left: 10px;
`;
