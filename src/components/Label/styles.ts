import styled from "styled-components/native";

export const CustomLabel = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 16px;
    margin-bottom: 6px;
`;