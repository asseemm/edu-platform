import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import styled from 'styled-components';

import Sidebar from "@/components/layout/Sidbar"
import { useAuth } from "@/hooks/authContext"

const inter = Inter({ subsets: ["latin"] });

const MainLayoutStyle = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  margin-left: 300px;
`;

export default function MainLayout() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push('/auth/login'); // перенаправляем на страницу входа
    return null; // или отображаем индикатор загрузки, пока происходит редирект
  }
  return (
    <MainLayoutStyle>
      <Sidebar />
      <Content></Content>
    </MainLayoutStyle>
  );
}
