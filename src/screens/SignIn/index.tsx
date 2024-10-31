import { Text, View } from "react-native";
import { Container, ContainerInputs, ContainerSocialButtons, FogotPassword, Logo, OrContinueWith, SocialButtons, SubContainer } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';

export function SignIn() {
  return (
    <Container>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <SubContainer>
        <ContainerInputs>
          <View>
            <Input placeholder="Type your email address" label="Email Address" />
          </View>
        </ContainerInputs>
        <ContainerInputs>
          <View>
            <Input placeholder="Type your password" label="Password" />
          </View>
        </ContainerInputs>
        <Button size="LARGE" title="Sign In" />
        <FogotPassword>Fogot Password</FogotPassword>
        <OrContinueWith>- OR Continue with -</OrContinueWith>
        <ContainerSocialButtons>
          <SocialButtons>
            <Logo source={facebook}/>
          </SocialButtons>
          <SocialButtons>
          <Logo source={google}/>
          </SocialButtons>
        </ContainerSocialButtons>
        <ContainerSocialButtons>
          <Text>Create An Account</Text>
          <Text style={{color: '#EB0029', fontWeight: 'bold'}}>Sign Up</Text>
        </ContainerSocialButtons>
      </SubContainer>
    </Container>
  )
}