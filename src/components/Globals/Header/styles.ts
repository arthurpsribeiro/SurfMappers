import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_secondary};

  width: 100%;
  height: ${Platform.OS === 'ios' ? RFValue(60) : RFValue(70)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px 20px;
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

  width: ${props => (props.stackHeader ? '120px' : '70px')};
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
