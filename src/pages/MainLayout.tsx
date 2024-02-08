import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import styled from 'styled-components';

import Sidebar from "@/components/layout/Sidbar"
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ["latin"] });

const MainLayoutStyle = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: calc(100% - 350px);
  margin-left: 350px;
  margin-top: 80px;

  @media screen and (max-width: 950px){
    margin-left: 0px;
    width: 100%;
  }
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <MainLayoutStyle>
      <Header />
      <Sidebar />
      <Content>{props.children}</Content>
    </MainLayoutStyle>
  );
}
