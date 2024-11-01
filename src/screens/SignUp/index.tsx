import { Controller, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Container, ContainerInputs, ContainerSocialButtons, Photo } from "./styles";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { Text } from "react-native";

export function SignUp() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      emailAddress: '',
      password: ''
    }
  });
  return (
    <Container>
      <Header title="SignUp" subTitle="Register and eat" back />
      <Photo />
      <ContainerInputs>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Label title="Full Name" />
              <Input value={value} onChange={onChange} placeholder="Type your full name" />
            </>
          )}
          name="fullname"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Label title="Email Address" />
              <Input value={value} onChange={onChange} placeholder="Type your email address" />
            </>
          )}
          name="emailAddress"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Label title="Password" />
              <Input value={value} onChange={onChange} placeholder="Type your password" secureTextEntry />
            </>
          )}
          name="emailAddress"
          rules={{ required: true }}
        />
      </ContainerInputs>
      <Button size="LARGE" title="Continue"/>
      <ContainerSocialButtons>
          <Text>I Already Have an Account</Text>
          <Text style={{color: '#EB0029', fontWeight: 'bold'}}>Log in</Text>
        </ContainerSocialButtons>
    </Container>
  )
}