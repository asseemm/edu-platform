import Image from "next/image";
import styled from 'styled-components';

import LogoSvg from '@/assets/icons/logoBig.svg'
import RegisterImg from '@/assets/img/register.png'

const LeftSideStyle = styled.div`
  width: 50%;
  background: linear-gradient(139.73deg, #0093FF 3.85%, #0058BA 99.1%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 750px){
    display: none;
  }
`;

const ImgCover = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(ImgCover)`
  align-items: end;
`;

const SideImg = styled(Image)`
  object-fit: contain;
`;

const LeftSideAuth = () => {
  return (
    <LeftSideStyle>
        <Logo><SideImg src={LogoSvg} alt="Logo"/></Logo>
        <ImgCover><SideImg src={RegisterImg} alt="Logo"/></ImgCover>
    </LeftSideStyle>
  );
};

export default LeftSideAuth;
