import React, {PropsWithChildren} from 'react';
import {ButtonProps} from "antd/lib/button/button";
import {ButtonBackground, ButtonOpacity} from "../../core/enums/enum";
import {ButtonStyle} from "../../styles/style";

type ButtonPropsType = { color?: ButtonBackground, opacity?: ButtonOpacity } & PropsWithChildren & ButtonProps


const CustomButton = ({
                          color = ButtonBackground.GRAY,
                          opacity = ButtonOpacity.HALF,
                          children,
                          ...rest
                      }: ButtonPropsType) => {
    return (
        <ButtonStyle {...rest} type="primary"
                style={{background: color, opacity: opacity, color: color === 'white' ? 'black' : 'white',...rest.style}}>{children}</ButtonStyle>
    );
};

const RoundButton = ({children, ...rest}: ButtonPropsType) => {
    return (
        <CustomButton {...rest} shape='round'>{children}</CustomButton>
    );
};

export default CustomButton;
export {RoundButton}
