import styled from 'styled-components/native';

import {BorderlessButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled(BorderlessButton)`
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
