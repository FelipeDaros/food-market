import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subTitle?: string;
}

export function Header({ title, subTitle }: Props){
  return(
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}