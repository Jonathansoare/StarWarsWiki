import styled from "styled-components/native";

export const CustomText = styled.Text`
    color: ${({ color }) => color || 'white'};
    font-size: 22px;
    font-weight: bold;
    margin-top: 12px;
`;