import React, {HTMLAttributes} from 'react';
import styled from "styled-components";

interface IProps extends HTMLAttributes<Element> {
    icon: JSX.Element,
    size: sizeNumber
}

type sizeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

const I = styled.i<{ width?: string }>`
  display: inline-block;
  width: ${(props) => props.width || '100%'};
`

const Icon = ({icon, size, ...rest}: IProps) => {
    return (
        <I className={rest.className} width={`${size * 10}%`} {...rest} >{icon}</I>
    );
};

export default Icon;
