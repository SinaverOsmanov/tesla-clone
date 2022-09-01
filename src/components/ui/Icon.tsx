import React, {HTMLAttributes} from 'react';
import CSS from 'csstype';

interface IProps extends HTMLAttributes<JSX.Element> {
    icon: JSX.Element,
    style: CSS.Properties
}

const Icon = ({icon, style, ...rest}: IProps) => {
    return (
        <i className={rest.className}  style={{display: 'inline-block', ...style}}>{icon}</i>
    );
};

export default Icon;
