import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Text from '../ui/Text';
import ProfileIcon from '@/assets/icons/profile.svg'
import VectorIcon from '@/assets/icons/down.svg'
import LogoutIcon from '@/assets/icons/logout.svg'


const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    width:100%;
    height: 80px;
    padding-top: 40px;
    z-index: 5;
`;

const Submenu = styled.div`
    display: none;
    position: absolute;
    right: 0px;
    top: 45px;
    gap: 10px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 5px 5px 5px 5px #ccc;
    border-radius: 15px;
`;

const User = styled.div`
    position: absolute;
    display: flex;
    right: 40px;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding-bottom: 10px;
    padding-left: 200px;

    &:hover ${Submenu}{
        display: grid;
    }
`;

const More = styled(Image)`
    transform: rotate(180deg);
`;

const Item = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    color: #39414C;
`;

const ItemImage = styled(Image)`
    width : 24px;
`;


const Header = () => {
    return (
        <HeaderStyle>
            <User>
                <Image src={ProfileIcon} alt='profile icon' />
                <Text style={{ fontSize: '20px', lineHeight: '20px' }}>sapar01</Text>
                <More src={VectorIcon} alt='profile icon' />
                <Submenu>
                    <Item href={'/ProfilePage'}><ItemImage src={ProfileIcon} alt='profile icon' /> Личный кабинет</Item>
                    <Item href={'/'}><ItemImage src={LogoutIcon} alt='log out icon' /> Выйти</Item>
                </Submenu>
            </User>
        </HeaderStyle>
    );
};

export default Header;
