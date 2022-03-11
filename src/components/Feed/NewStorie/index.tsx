import React from 'react';

import {useTheme} from 'styled-components';

import {Icon} from '../../Globals/Icon';

import {Container, StorieCircle, AddStorieText} from './styles';

export const NewStorie: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <StorieCircle>
        <Icon iconName="camera" size={24} color={theme.colors.main} />
      </StorieCircle>
      <AddStorieText>Adicionar</AddStorieText>
    </Container>
  );
};
