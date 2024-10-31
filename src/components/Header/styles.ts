import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;


export const Title = styled.Text`
  margin-top: 30px;
  font-size: 22px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  color: ${({theme}) => theme.COLORS.BLACK};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.DARK_GRAY};
`;