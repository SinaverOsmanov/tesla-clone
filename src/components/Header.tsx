import * as React from 'react';
import {Col, Drawer, Layout, Row} from "antd";
import icon from "../assets/svg/svg-image";
import {useState} from "react";

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
            <Row justify='space-between'>
                <Col span={2}>
                    {icon.logo}
                </Col>
                <Col span={8}>
                    <Row justify='space-around'>
                        <Col><span>Model S</span></Col>
                        <Col><span>Model 3</span></Col>
                        <Col><span>Model X</span></Col>
                        <Col><span>Model Y</span></Col>
                        <Col><span>Solar Roof</span></Col>
                        <Col><span>Solar Panels</span></Col>
                    </Row>
                </Col>
                <Col span={3}>
                    <Row justify='space-around'>
                        <Col><span>Shop</span></Col>
                        <Col><span> Account</span></Col>
                        <Col><span onClick={showDrawer}>
                            Menu
                        </span></Col>
                    </Row>
                </Col>

            </Row>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </HeaderTag>
    );
};
