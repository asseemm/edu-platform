import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import { useAuth } from "@/hooks/authContext";
import { verifyToken } from './api/authUtils';
import LoginPage from "./auth/LoginPage";
import MainLayout from "./MainLayout";
import CoursesPage from "./courses/CoursesPage";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = cookies.authToken;

  const isAuthenticated = token ? verifyToken(token) : false;

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/auth/LoginPage',
        permanent: false,
      },
    };
  }

  return (
    <MainLayout>
      <CoursesPage />
    </MainLayout>
  );
};