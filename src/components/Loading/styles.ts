import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: '#FFF';
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: '#EB0029',
  size: 'large'
}))``;