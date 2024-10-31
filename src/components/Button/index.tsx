import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  size: 'LARGE' | 'MEDIUM'
}

export function Button({ title, size = 'LARGE', ...rest }: Props) {
  return (
    <Container size={size} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}