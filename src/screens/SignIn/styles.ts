import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 24px;
`;

export const SubContainer = styled(View)`
  margin-top: 58px;
  justify-items: center;
`; 

export const ContainerInputs = styled(View)`
  margin-bottom: 24px;
`; 

export const FogotPassword = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.RED};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.COLORS.RED};;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;
  margin-top: 12px;
`;

export const OrContinueWith = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;
  margin-top: 24px;
`;

export const ContainerSocialButtons = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

export const SocialButtons = styled(TouchableOpacity)`
  width: 108px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fcdbe1;
`;

export const Logo = styled(Image)`
  width: 78px;
  height: 24px;
`;