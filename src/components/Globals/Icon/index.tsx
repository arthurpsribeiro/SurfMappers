import React from 'react';

import {IconContainer, TouchableContainer} from './styles';

interface IIconProps {
  iconName: string;
  border?: boolean;
  size?: number;
  color?: string;
  touchable?: boolean;
}

export const Icon: React.FC<IIconProps> = ({
  iconName,
  border,
  size,
  color,
  touchable,
}) => {
  return touchable ? (
    <TouchableContainer>
      <IconContainer
        name={iconName}
        border={border}
        size={size}
        color={color}
      />
    </TouchableContainer>
  ) : (
    <IconContainer name={iconName} border={border} size={size} color={color} />
  );
};
