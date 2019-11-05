import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autocorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autocorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}