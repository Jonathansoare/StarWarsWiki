import React from 'react';
import logoImage from "../../../../assets/LogoEmpire.png"
import {LogoImagemStyle} from "./styles"

export const Logo = () => {
    return (
        <LogoImagemStyle source={logoImage}/>
    )
}