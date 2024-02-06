import styled from 'styled-components';

const Content = styled.p`
    font-size: 28px;
    font-weight: 700;
    line-height: 33px;
`;

interface TitleProps {
    children: React.ReactNode;
  }

const Title = (props: TitleProps) => {
  return (
    <Content>
        {props.children}
    </Content>
  );
};

export default Title;
