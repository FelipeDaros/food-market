import { TextInput } from "react-native";
import styled from "styled-components/native";


export const CustomInput = styled(TextInput)`
  min-height:40px;
  max-height: 40px;

  background-color: '#FFF';
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 6px 6px 6px 10px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;
  border-radius: 8px;

  border: 1px ${({ theme }) => theme.COLORS.DARK_GRAY};
`;