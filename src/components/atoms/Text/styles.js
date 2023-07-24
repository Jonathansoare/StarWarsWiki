import styled from "styled-components/native";

export const CustomText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.red};
    font-size: ${({theme}) => theme.metrics.px(24)}px;
    margin-top: ${({theme}) => theme.metrics.px(12)}px;
    font-family: 'SourceSansPro_700Bold';
`;