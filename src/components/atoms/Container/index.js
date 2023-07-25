import styled from "styled-components/native";


export const Container = styled.View `
    display: flex;
    flex-direction: ${({dir}) => dir || 'column'};
    justify-content: ${({just}) => just || 'flex-start'};
    align-items: ${({aling}) => aling || 'flex-start'};
    background-color: ${({bg,theme}) => theme.colors[bg || 'dark'] };
    width: ${({theme,w}) => (w ? `${theme.metrics.px(w)}px` : '100%')};
    height: ${({theme,h}) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`;

export const SCreenScrollConatiner = styled.ScrollView`
    background-color: ${({bg,theme}) => theme.colors[bg || 'dark'] };
`