import React, { useState } from 'react';
import { Inter } from "next/font/google";
import styled from 'styled-components';

import MainLayout from './MainLayout';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

const inter = Inter({ subsets: ["latin"] });

const PageWrapper = styled.div`
    width: 100%;
    padding: 40px 60px;
    margin-top: 50px;
`;

const ProfileBox = styled.div`
    display: flex;
    border: 1px solid #DADADA;
    border-radius: 15px;
    margin-top: 50px;
    padding: 50px 50px 0px 50px;

    @media screen and (max-width: 700px){
        flex-wrap: wrap;
        padding: 30px 30px 0px 30px;
    }
`;

const InfoColumn = styled.div`
    width: 30%;

    @media screen and (max-width: 1550px){
       width: 40%;
    }

    @media screen and (max-width: 1250px){
        width: 50%;
    }

    @media screen and (max-width: 700px){
        width: 100%;
    }
`;

const InfoCont = styled.div`
    margin-bottom: 50px;
    display: grid;

    @media screen and (max-width: 700px){
        margin-bottom: 20px;
    }
`;

const ChangeBtn = styled.button`
    position : absolute;
    right: 60px;
    color: #0093FF;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;

    @media screen and (max-width: 700px){
        font-size: 16px;
        right: 40px;
    }
`;

const Input = styled.input`
    font-size: 18px;
    color: #39414C;
    border: 1px solid #DADADA;
    border-radius: 4px;
    padding: 10px;
    width: 90%;
    margin-top: 10px;
`;

const TextDisplay = styled.span`
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
    color: #39414C;
`;

const LabelDisplay = styled.span`
    font-size: 18px;
    color: #888D94;
    font-weight: 500;
    line-height: 20px;
`;

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [parentName, setParentName] = useState('Аскар Кайратулы');
    const [studentName, setStudentName] = useState('Сапар Аскарулы Максотов');
    const [phone, setPhone] = useState('+7 (707) 982 71 08');
    const [email, setEmail] = useState('sap@gmail.com');
    const [classNumber, setClassNumber] = useState('6 класс');
    const [language, setLanguage] = useState('Русский');
    const [city, setCity] = useState('Алматы');
    const [password, setPassword] = useState('**********');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (

        <MainLayout>
            <PageWrapper>
                <Title>Личный кабинет</Title>
                <ChangeBtn onClick={isEditing ? handleSaveClick : handleEditClick}>
                    {isEditing ? 'Сохранить' : 'Изменить'}
                </ChangeBtn>
                <ProfileBox>
                    <InfoColumn>
                        <InfoCont>
                            <LabelDisplay>ФИО Родителя:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={parentName}
                                    onChange={(e) => setParentName(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{parentName}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Телефон</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{phone}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Класс:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={classNumber}
                                    onChange={(e) => setClassNumber(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{classNumber}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Пароль:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{password}</TextDisplay>
                            )}
                        </InfoCont>
                    </InfoColumn>
                    <InfoColumn>
                        <InfoCont>
                            <LabelDisplay>ФИО Ученика:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{studentName}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Эл. адрес:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{email}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Язык обучения:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{language}</TextDisplay>
                            )}
                        </InfoCont>
                        <InfoCont>
                            <LabelDisplay>Город:</LabelDisplay>
                            {isEditing ? (
                                <Input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            ) : (
                                <TextDisplay>{city}</TextDisplay>
                            )}
                        </InfoCont>
                    </InfoColumn>
                </ProfileBox>
            </PageWrapper>
        </MainLayout>
    );
}
