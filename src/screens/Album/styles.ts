import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const AlbumInfo = styled.View`
  padding: 20px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};
  padding: 5px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.main};
  border-radius: 8px;
`;

export const IconBorderless = styled(Feather)`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.background_secondary};
  padding: 5px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  margin-top: 5px;
`;

export const AuthorSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${({theme}) => theme.colors.background_primary};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.background_primary};

  /* background-color: red; */
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

export const PicturesInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.background_primary};
`;

export const PicturesAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main};
`;

export const FilterButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 18px;
  background-color: ${({theme}) => theme.colors.main};
  margin-left: 15px;
`;

export const FilterButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.background_secondary};
`;

export const AlbumTime = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};

  padding: 10px 20px;
`;
