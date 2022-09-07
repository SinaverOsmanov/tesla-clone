import styled from "styled-components";
import {Button, Col, Row} from "antd";


export const ButtonStyle = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  padding: 10px 0;
  height: 100%;
  border: none;
  font-size: 12px;
  font-weight: 600;
`

export const RoundButtonStyle = styled(ButtonStyle)`

`

export const SectionStyle = styled.section<{ background?: string, image?: string }>`
  background-image: url(${props => props.image || ''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${props => props.background || 'white'};
  height: 100vh;
  width: 100%;
`

export const A = styled.a`
  color: black;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.8);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.8);
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    color: black;
  }

  &:hover::after {
    -webkit-box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.8);
  }
`

export const FlexColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

export const FlexRow = styled(Row)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
`
