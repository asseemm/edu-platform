import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import styled from 'styled-components';

import MainLayout from '@/pages/MainLayout';
import Title from '@/components/ui/Title';
import CourseCard from '@/components/ui/CourseCard';

import NIS from "@/assets/img/NIS.png";
import KTL from "@/assets/img/KTL.png";
import RFMSH from "@/assets/img/RFMSH.png";


const inter = Inter({ subsets: ["latin"] });

const PageWrapper = styled.div`
    padding: 60px;
`;

const Courses = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 100px;
`;

export default function CoursesPage() {
    return(
        <MainLayout>
        <PageWrapper>
            <Title>Курсы</Title>
            <Courses>
                <CourseCard
                    subjectCount={4}
                    text="Подготовка к НИШ"
                    imageSrc={NIS.src}
                />
                <CourseCard
                    style={{ backgroundColor:"linear-gradient(139.13deg, #EF4B2E 2.05%, #850000 100%)", color:"#EF4B2E"}}
                    subjectCount={4}
                    text="Подготовка к КТЛ"   
                    imageSrc={KTL.src}           
                />
                <CourseCard
                    style={{ backgroundColor:"linear-gradient(319.73deg, #4D2AEF 0%, #A36DFF 99.1%)", color:"#4D2AEF"}}
                    subjectCount={4}
                    text="Подготовка к РФМШ"
                    imageSrc={RFMSH.src}
                />
            </Courses>
        </PageWrapper>
        </MainLayout>
    );
}
