import * as React from 'react';
import {useState} from 'react';
import {Drawer, Layout} from "antd";
import icon from "../assets/svg/svg-image";
import {FlexColumn, FlexRow} from '../styles/style';

const {Header: HeaderTag} = Layout;


// const anchors = [
//     {
//         id: 1,
//         title: 'Model S',
//         path: '/'
//     },
//     {
//         id: 2,
//         title: 'Model 3',
//         path: '/'
//     },
//     {
//         id: 3,
//         title: 'Model X',
//         path: '/'
//     },
//     {
//         id: 4,
//         title: 'Model Y',
//         path: '/'
//     },
//     {
//         id: 5,
//         title: 'Solar Roof',
//         path: '/'
//     },
//     {
//         id: 6,
//         title: 'Solar Panels',
//         path: '/'
//     }
// ]

export const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <HeaderTag style={{background: 'none'}}>
            <FlexRow justify='space-between' align='middle' style={{
                fontWeight: 600
            }}>
                <FlexColumn span={2}>
                    <FlexRow>
                        {icon.logo}
                    </FlexRow>
                </FlexColumn>
                <FlexColumn span={8}>
                    <FlexRow justify='space-around'>
                        <FlexColumn><span>Model S</span></FlexColumn>
                        <FlexColumn><span>Model 3</span></FlexColumn>
                        <FlexColumn><span>Model X</span></FlexColumn>
                        <FlexColumn><span>Model Y</span></FlexColumn>
                        <FlexColumn><span>Solar Roof</span></FlexColumn>
                        <FlexColumn><span>Solar Panels</span></FlexColumn>
                    </FlexRow>
                </FlexColumn>
                <FlexColumn span={3}>
                    <FlexRow justify='space-around'>
                        <FlexColumn><span>Shop</span></FlexColumn>
                        <FlexColumn><span>Account</span></FlexColumn>
                        <FlexColumn><span onClick={showDrawer}>
                            Menu
                        </span></FlexColumn>
                    </FlexRow>
                </FlexColumn>

            </FlexRow>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </HeaderTag>
    );
};
