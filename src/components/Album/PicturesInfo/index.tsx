import React from 'react';
import {useTheme} from 'styled-components';

import {Icon} from '../../Globals/Icon';

import {
  Container,
  PicturesAmount,
  FilterButton,
  FilterButtonText,
} from './styles';

export const PicturesInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <PicturesAmount>260 fotos</PicturesAmount>
      <FilterButton>
        <Icon iconName="filter" color={theme.colors.background_secondary} />
        <FilterButtonText>Filtrar por surfista</FilterButtonText>
        <Icon
          iconName="chevron-down"
          color={theme.colors.background_secondary}
        />
      </FilterButton>
    </Container>
  );
};
