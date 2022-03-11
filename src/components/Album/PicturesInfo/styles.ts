import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.background_primary};
`;

export const PicturesAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main};
`;

export const FilterButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 18px;
  background-color: ${({theme}) => theme.colors.main};
  margin-left: 15px;
`;

export const FilterButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.background_secondary};
`;
