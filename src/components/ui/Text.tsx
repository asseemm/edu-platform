import styled from 'styled-components';

const Content = styled.p`
    font-size: ${(props) => props.style?.fontSize || '24px'};
    font-weight: ${(props) => props.style?.fontWeight || '400'};
    line-height: ${(props) => props.style?.lineHeight || '30px'};
    color: ${(props) => props.style?.color || '#000'};
`;

interface TextProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Text = (props: TextProps) => {
  return (
    <Content style={props.style}>
        {props.children}
    </Content>
  );
};

export default Text;
