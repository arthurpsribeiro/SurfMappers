import React from 'react';

import {Container, StorieCircle, UserPhoto, Username} from './styles';

interface IStorieProps {
  username: string;
  photo: string;
  visualized: boolean;
}

export const Storie: React.FC<IStorieProps> = ({
  username,
  photo,
  visualized,
}) => {
  const formartUsername = (string: string): string => {
    if (string.length >= 11) {
      return string.slice(0, 9) + '..';
    } else {
      return string;
    }
  };

  return (
    <Container>
      <StorieCircle visualized={visualized}>
        <UserPhoto source={{uri: photo}} />
      </StorieCircle>
      <Username>{formartUsername(username)}</Username>
    </Container>
  );
};
