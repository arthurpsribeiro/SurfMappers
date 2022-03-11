import React from 'react';
import {useTheme} from 'styled-components';
import {Icon} from '../../Globals/Icon';

import {Container, TextInput} from './styles';

export const SearchInput: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Icon iconName="search" color={theme.colors.text} />
      <TextInput placeholder="Onde você surfou hoje?" />
    </Container>
  );
};
