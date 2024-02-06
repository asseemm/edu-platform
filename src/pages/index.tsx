import Image from "next/image";
import styled from 'styled-components';
import { Inter } from "next/font/google";


import { useAuth } from "@/hooks/authContext";
import LoginPage from "./auth/LoginPage";
import MainLayout from "./MainLayout";
import CoursesPage from "./courses/CoursesPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <MainLayout>
      <CoursesPage />
    </MainLayout>
  );
}
