import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonSizeStyleProps = 'LARGE' | 'MEDIUM';

type Props = {
  size: ButtonSizeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  min-height: 45px;
  max-height: 45px;

  width: ${({ size }) => size === 'LARGE' ? '312px' : '200px'};

  background-color: ${({ theme }) => theme.COLORS.RED};
  align-self: center;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;  