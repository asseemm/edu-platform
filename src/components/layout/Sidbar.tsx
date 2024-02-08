import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import LogoSvg from '@/assets/icons/logo.svg'
import BookSvg from '@/assets/icons/book.svg'
import FileSvg from '@/assets/icons/file.svg'
import LikeSvg from '@/assets/icons/like.svg'
import ListSvg from '@/assets/icons/list.svg'
import HelpSvg from '@/assets/icons/help.svg'

interface SidebarContainerProps {
  isMobileOpen: boolean;
}
interface ToggleProps {
  isMobileOpen: boolean;
}

const SidebarContainer = styled.aside<SidebarContainerProps>`
  width: 350px;
  height: 100vh;
  position: fixed;
  left: ${(props) => (props.isMobileOpen ? '0' : '-350px')};
  top: 0;
  bottom: 0;
  background: linear-gradient(139.73deg, #0093FF 3.85%, #0058BA 99.1%);
  transition: left 0.3s ease;
  z-index: 3;

  @media screen and (max-width: 550px){
    width: 300px;
  }
`;

const Logo = styled(Image)`
  margin: 50px 50px 100px 50px;

  @media screen and (max-width: 550px){
    margin: 80px 50px 30px 50px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 10px 60px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Toggle = styled.aside<ToggleProps>`
  display: none;
  position: fixed;
  font-size: 30px;
  z-index: 5;
  left: 20px;
  top: 15px;
  color: ${(props) => (props.isMobileOpen ? '#fff' : '#000')};
  cursor: pointer;
  transition: color 0.3s ease;

  @media screen and (max-width: 850px){
    display: block;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  padding: 10px 0;
  border-radius: 15px;
  &:hover {
    background-color: #fff;
    color: #0093FF;
  }
`;

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth < 950) {
        setIsMobileOpen(false);
      } else {
        setIsMobileOpen(true);
      }
    };

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <Toggle onClick={toggleSidebar} isMobileOpen={isMobileOpen}>
        <span>&#9776;</span>
      </Toggle>
      <SidebarContainer isMobileOpen={isMobileOpen}>
        <Logo src={LogoSvg} alt="Logo" />
        <nav>
          <NavList>
            <NavItem>
              <NavLink href="/courses/CoursesPage" passHref>
                <Image src={ListSvg} alt="List Icon" height={32} width={32} />
                Курсы
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tests/TestsPage" passHref>
                <Image src={FileSvg} alt="File Icon" height={32} width={32} />
                Тесты
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" passHref>
                <Image src={BookSvg} alt="Book Icon" height={32} width={32} />
                Книги
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" passHref>
                <Image src={LikeSvg} alt="Like Icon" height={32} width={32} />
                Подписка
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" passHref>
                <Image src={HelpSvg} alt="Help Icon" height={32} width={32} />
                FAQ
              </NavLink>
            </NavItem>
          </NavList>
        </nav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
