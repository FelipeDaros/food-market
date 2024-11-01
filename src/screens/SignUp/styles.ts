import { Image, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Photo = styled(Image)`
  width: 110px;
  height: 110px;
  background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  border-radius: 100%;
  align-self: center;
  opacity: 0.1;
  margin-top: 50px;
`;

export const ContainerInputs = styled(View)`
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 22px;
`;

export const ContainerSocialButtons = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;