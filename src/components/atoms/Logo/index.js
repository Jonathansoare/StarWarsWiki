import React from 'react';
import logoImage from "../../../../assets/LogoEmpire.png"
import {LogoImagemStyle} from "./styles"

const sizes = {
    small:24,
    large:64
}

export const Logo = ({size}) => {
    return (
        <LogoImagemStyle source={logoImage} size={sizes[size || 'large']}/>
    )
}