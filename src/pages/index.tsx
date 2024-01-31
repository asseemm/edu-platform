import Image from "next/image";
import { Inter } from "next/font/google";
import styled from 'styled-components';

import { useAuth } from "@/hooks/authContext"
import MainLayout from "./MainLayout";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <>
      <MainLayout />
      {/* <RegisterPage /> */}
    </>
  );
}
