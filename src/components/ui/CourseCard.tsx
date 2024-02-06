import styled from 'styled-components';
import Image from 'next/image';

import CustomImage from './CustomImage';
import Text from './Text';
import CourseBack from '@/assets/img/CourseBack2.png';

const CourseBox = styled.div`
    background: ${(props) => props.style?.backgroundColor || 'linear-gradient(139.73deg, #0093FF 3.85%, #0058BA 99.1%)'};
    height: 500px;
    width: 31%;
    border-radius: 15px;

    @media screen and (max-width: 1650px){
        height: 400px;
    }

    @media screen and (max-width: 1350px){
        width: 48%;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1050px){
        height: 350px;
    }

    @media screen and (max-width: 750px){
        width: 90%;
        height: 400px;
    }

    @media screen and (max-width: 550px){
        width: 100%;
        height: 400px;
    }
`;

const CourseBoxContent = styled.div`
    position: relative;
    padding: 30px;
    height: 100%;
    width: 100%;
`;

const BackImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const MoreBtn = styled.div`
    position: absolute;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    border-radius: 50px;
    color: ${(props) => props.style?.backgroundColor || '#0093FF'};
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`;

const CourseImage = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50%;

    @media screen and (max-width: 1850px){
        width: 60%;
    }
    @media screen and (max-width: 950px){
        width: 50%;
    }

`;

interface CourseCardProps {
    style?: React.CSSProperties;
    subjectCount?: number;
    text?: string;
    imageSrc?: string | undefined;
}

const CourseCard = (props: CourseCardProps) => {
    return (
        <CourseBox style={props.style}>
            <CourseBoxContent>
                <BackImage src={CourseBack} alt="Course Background" width={500} height={500} />
                <MoreBtn style={props.style}><span>&#10140;</span></MoreBtn>
                <Text style={{ fontSize: '20px', color: '#fff' }}>{props.subjectCount} предмета</Text>
                <Text style={{ fontSize: '24px', color: '#fff', fontWeight: '700', lineHeight: '40px' }}>{props.text}</Text>
                <CourseImage>
                    <CustomImage src={props.imageSrc || 'заглушка-если-undefined'} alt="Alt Text" width={500} height={300} />
                </CourseImage>
            </CourseBoxContent>
        </CourseBox>
    );
};

export default CourseCard;
