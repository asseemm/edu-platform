import { useState } from 'react';
import Link from "next/link";
import { Inter } from "next/font/google";
import styled from 'styled-components';

import LeftSideAuth from "@/components/ui/LeftSideAuth";

const inter = Inter({ subsets: ["latin"] });

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const FormSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px){
    width: 100%;
    align-items: start;
    padding-top: 20%;
  }
`;

const FormContainer = styled.div`
  width: 45%;
  height: auto;
  border-radius: 15px;
  border: solid 1px #DADADA;
  padding: 40px;

  @media screen and (max-width: 1650px){
    width: 60%;
  }
  @media screen and (max-width: 1250px){
    width: 70%;
    padding: 40px 20px;
  }
  @media screen and (max-width: 950px){
    width: 80%;
    padding: 40px 20px;
  }
  @media screen and (max-width: 750px){
    width: 85%;
    border: none;
    padding: 0px;
  }
`;

const Bar = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 1250px){
    gap: 30px;
  }
  @media screen and (max-width: 750px){
    justify-content: left;
    gap: 40px;
  }
`;

const AuthLink = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  color: #888D94;

  &:hover{
    color: #0093FF;
  }

  @media screen and (max-width: 950px){
    font-size: 24px;
  }
`;

const Inputs = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
`;

const Input = styled.input`
  background-color: #F9F9F9;
  padding: 10px 20px;
  border-radius: 50px;
`;

const SubmitBtn = styled.button`
  background-color: #0093FF;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  color: #fff;
`;

const ForgotPassword = styled.a`
  text-align: center;
  color: #0093FF;
  margin-top: 20px;
`;

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          language,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Успешная регистрация', data);
      } else {
        console.error('Ошибка регистрации', data.error);
      }
    } catch (error) {
      console.error('Ошибка запроса', error);
    }
  };

  return (
    <PageWrapper>
      <LeftSideAuth></LeftSideAuth>
      <FormSide>
        <FormContainer>
          <Bar>
            <Link href="/auth/LoginPage"><AuthLink>Войти</AuthLink></Link>
            <Link href="/auth/RegisterPage"><AuthLink style={{ color: '#0093FF', }}>Регистрация</AuthLink></Link>
          </Bar>
          <form onSubmit={handleRegister}>
            <Inputs>
              <Input type="name" placeholder="ФИО" name="name" />
              <Input type="phone" placeholder="Телефон" name="phone" />
              <Input type="text" placeholder="Язык обучения" name="language" />
              <Input type="email" placeholder="Эл. адрес" name="email" />
              <Input type="password" placeholder="Пароль" name="password" />
              <Input type="password" placeholder="Повторите парольПароль" name="password" />
              <SubmitBtn type="submit">Регистрация</SubmitBtn>
            </Inputs>
          </form>
          <ForgotPassword href="">Забыли пароль?</ForgotPassword>
        </FormContainer>
      </FormSide>
    </PageWrapper>
  );
}
