import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 20px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  margin-top: 5px;
`;
