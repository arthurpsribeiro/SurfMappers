import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';

interface IIconProps {
  border?: boolean;
  size?: number;
  color?: string;
}

export const IconContainer = styled(Feather)<IIconProps>`
  font-size: ${({size}) => (size ? RFValue(size) : RFValue(14))}px;

  color: ${({color, theme}) => (color ? color : theme.colors.text_dark)};

  padding: 5px;

  border-width: ${({border}) => (border ? 1 : 0)}px;
  border-style: ${({border}) => (border ? 'solid' : 'solid')};
  border-color: ${({border, theme}) => (border ? theme.colors.main : 0)};
  border-radius: ${({border}) => (border ? 8 : 0)}px;
`;

export const TouchableContainer = styled(BorderlessButton)<IIconProps>`
  justify-content: center;
  align-items: center;
`;
