import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px 20px;

  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${({theme}) => theme.colors.background_primary};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.background_primary};
`;

export const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AuthorName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  margin-left: 10px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FollowButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.main};
  margin-left: 15px;
`;

export const FollowButtonTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.background_secondary};
`;
