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
  width: calc(100% - 350px);
  height: 100vh;
  margin-left: 350px;

  @media screen and (max-width: 950px){
    margin-left: 0px;
    width: 100%;
  }
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  // const router = useRouter();
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   router.push('/auth/LoginPage');
  //   return null;
  // }

  return (
    <MainLayoutStyle>
      <Sidebar />
      <Content>{props.children}</Content>
    </MainLayoutStyle>
  );
}
