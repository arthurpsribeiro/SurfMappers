import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  margin-horizontal: 20px;
  padding: 10px 8px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  margin-left: 10px;
`;

export const Icon = styled(Feather)`
  align-self: center;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
`;
