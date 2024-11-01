import { CustomLabel } from "./styles";

type Props = {
  title: string;
}

export function Label({ title }: Props){
  return (<CustomLabel>{title}</CustomLabel>)
}