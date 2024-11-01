import styled from "styled-components/native";
import AntDesign from '@expo/vector-icons/AntDesign';

export const Container = styled.View`
  width: 100%;
  height: 108px;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 23px;
`;

export const ContainerTitles = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;


export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  color: ${({theme}) => theme.COLORS.BLACK};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.DARK_GRAY};
`;

export const ContainerBackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background-color: ${({theme}) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const BackIcon = styled(AntDesign).attrs(({theme}) => ({
  size: 14,
  color: '#fff'
}))``;