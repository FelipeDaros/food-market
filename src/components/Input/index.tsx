import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { CustomInput, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, label, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <>
      <Label>{label}</Label>
      <CustomInput
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </>
  )
}