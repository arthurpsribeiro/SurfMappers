import React from 'react';

import {Container, TextInput, Icon} from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Icon name="search" />
      <TextInput placeholder="Onde você surfou hoje?" />
    </Container>
  );
};

export default SearchInput;
