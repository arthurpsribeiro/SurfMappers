import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_secondary};

  width: 100%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
  margin-top: 10px;
`;

export const Logo = styled.Image.attrs({
  resizemode: 'contain',
})`
  width: ${RFValue(140)}px;
  height: ${RFValue(30)}px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* background-color: red; */
  /* width: 70px; */
  width: ${props => (props.stackHeader ? '120px' : '70px')};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const BackButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const ScreenTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  margin-left: 10px;
`;
