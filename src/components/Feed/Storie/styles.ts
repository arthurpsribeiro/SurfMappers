import {BorderlessButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IStoryCircleProps {
  visualized: boolean;
}

export const Container = styled(BorderlessButton)`
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
`;

export const StorieCircle = styled.View<IStoryCircleProps>`
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${({theme, visualized}) =>
    visualized ? theme.colors.text : theme.colors.main};
  border-radius: 45px;
`;

export const UserPhoto = styled.Image`
  height: 96%;
  width: 96%;
  border-radius: 45px;
`;

export const Username = styled.Text`
  max-width: 100%;
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  margin-top: 4px;
`;
