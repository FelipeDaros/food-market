import { TouchableOpacity, View } from "react-native";
import { BackIcon, Container, ContainerBackButton, ContainerTitles, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  back?: boolean;
  subTitle?: string;
}

export function Header({ title, back = false, subTitle }: Props) {
  return (
    <Container>
      {back && (
        <ContainerBackButton>
          <BackIcon name="left" />
        </ContainerBackButton>
      )}
      <ContainerTitles>
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </ContainerTitles>
    </Container>
  );
}
