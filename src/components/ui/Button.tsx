import React, {PropsWithChildren} from 'react';
import {Button} from "antd";
import {ButtonProps} from "antd/lib/button/button";
import {ButtonBackground, ButtonOpacity} from "../../core/enums/enum";

type ButtonPropsType = { color?: ButtonBackground, opacity?: ButtonOpacity } & PropsWithChildren & ButtonProps


const CustomButton = ({
                          color = ButtonBackground.GRAY,
                          opacity = ButtonOpacity.HALF,
                          children,
                          ...rest
                      }: ButtonPropsType) => {
    return (
        <Button {...rest} type="primary"
                style={{background: color, opacity: opacity, ...rest.style}}>{children}</Button>
    );
};

const RoundButton = ({children, ...rest}: ButtonPropsType) => {
    return (
        <CustomButton {...rest} shape='round'>{children}</CustomButton>
    );
};

export default CustomButton;
export {RoundButton}
