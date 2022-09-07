import * as React from 'react';
import {useState} from 'react';
import {Drawer, Layout} from "antd";
import icon from "../assets/svg/svg-image";
import {FlexColumn, FlexRow, FlexRowCenter} from '../styles/style';
import Icon from "./ui/Icon";
import styled from "styled-components";

const {Header: HeaderLayout} = Layout;

const HeaderStyle = styled(HeaderLayout)`
  background: none;
  padding: 0
`

const HeaderWrapperStyle = styled(FlexRow)`
  font-weight: 600;
  
  & div > div {
    text-align: center;
  } 
 
  &:hover {
    
  }
  
`


export const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <HeaderStyle style={{background: 'none'}}>
            <HeaderWrapperStyle justify='space-between' align='middle' >
                <FlexColumn span={2}>
                    <FlexRowCenter justify='center'>
                        <Icon icon={icon.logo} size={8}/>
                    </FlexRowCenter>
                </FlexColumn>
                <FlexColumn offset={6}>
                    <FlexRow justify='space-around' align='middle'>
                        <FlexColumn><span>Model S</span></FlexColumn>
                        <FlexColumn><span>Model 3</span></FlexColumn>
                        <FlexColumn><span>Model X</span></FlexColumn>
                        <FlexColumn><span>Model Y</span></FlexColumn>
                        <FlexColumn><span>Solar Roof</span></FlexColumn>
                        <FlexColumn><span>Solar Panels</span></FlexColumn>
                    </FlexRow>
                </FlexColumn>
                <FlexColumn offset={6} span={3}>
                    <FlexRow align='middle'>
                        <FlexColumn><span>Shop</span></FlexColumn>
                        <FlexColumn><span>Account</span></FlexColumn>
                        <FlexColumn><span onClick={showDrawer}>
                            Menu
                        </span></FlexColumn>
                    </FlexRow>
                </FlexColumn>

            </HeaderWrapperStyle>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </HeaderStyle>
    );
};
