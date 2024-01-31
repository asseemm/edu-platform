import Link from 'next/link';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(139.73deg, #0093FF 3.85%, #0058BA 99.1%);
`;

const Logo = styled.div`
  margin-bottom: 100px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 15px 60px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #0093FF;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo />
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="/" passHref>Курсы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/courses" passHref>Тесты</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" passHref>Книги</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" passHref>Подписка</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" passHref>FAQ</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
