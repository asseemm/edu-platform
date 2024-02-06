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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #F9F9F9;
  border: 1px solid #DADADA;
  cursor: pointer;
  outline: none;
  align-items: center;
  justify-content: center;
  display: flex;

  &:checked {
    background-color: #EAEDF5;
    border: 1px solid #EAEDF5;

    &::after {
      content: '\u2713';
      font-size: 16px; 
      color: #888D94;
    }
  }
`;

const SubmitBtn = styled.button`
  background-color: #0093FF;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  color: #fff;
`;

const SavePassword = styled.div`
  display: flex;
  gap: 10px;
`;

const ForgotPassword = styled.a`
  text-align: center;
  color: #0093FF;
  margin-top: 20px;
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Успешный вход', data);
      } else {
        console.error('Ошибка входа', data);
      }
    } catch (error) {
      // Обработка ошибок сети или сервера
      console.error('Ошибка запроса', error);
    }
  };

  return (
    <PageWrapper>
      <LeftSideAuth></LeftSideAuth>
      <FormSide>
        <FormContainer>
          <Bar>
          <Link href="/auth/LoginPage"><AuthLink style={{color:'#0093FF',}}>Войти</AuthLink></Link>
          <Link href="/auth/RegisterPage"><AuthLink>Регистрация</AuthLink></Link>
          </Bar>
          <form onSubmit={handleSubmit}>
            <Inputs>
              <Input
                type="email"
                placeholder="Эл. адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SavePassword>
              <Checkbox type="checkbox" id="savePassword" />
                <label htmlFor="savePassword">Запомнить пароль</label>
              </SavePassword>
              <SubmitBtn type="submit">Войти</SubmitBtn>
            </Inputs>
          </form>
          <ForgotPassword href="">Забыли пароль?</ForgotPassword>
        </FormContainer>
      </FormSide>
    </PageWrapper>
  );
}
