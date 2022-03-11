import React from 'react';

import {useTheme} from 'styled-components';
import {Icon} from '../../Globals/Icon';

import {
  Container,
  ProfileWrapper,
  AuthorName,
  ButtonsWrapper,
  FollowButton,
  FollowButtonTitle,
} from './styles';

interface IAuthorSectionProps {
  author: string;
}

export const AuthorSection: React.FC<IAuthorSectionProps> = ({author}) => {
  const theme = useTheme();
  return (
    <Container>
      <ProfileWrapper>
        <Icon iconName="camera" color={theme.colors.text} border touchable />
        <AuthorName>{author}</AuthorName>
      </ProfileWrapper>

      <ButtonsWrapper>
        <Icon
          iconName="message-square"
          color={theme.colors.text}
          border
          touchable
        />
        <FollowButton>
          <FollowButtonTitle>Seguindo</FollowButtonTitle>
        </FollowButton>
      </ButtonsWrapper>
    </Container>
  );
};
