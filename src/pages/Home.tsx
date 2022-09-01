import * as React from 'react';
import {Col, Layout, Row, Typography} from "antd";
import {Header} from "../components/Header";
import {RoundButton} from "../components/ui/Button";
import icon from "../assets/svg/svg-image";
import Icon from "../components/ui/Icon";

const {Title} = Typography;

export const Home = () => {
    return (
        <Layout style={{
            background: 'none',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: 20
        }}>

            <Row justify='center'>
                <Col span={24}>
                    <Row>
                        <PreHeader/>
                    </Row>
                    <Header/>

                    <Row justify='center'>
                        <Title>Model 3</Title>
                    </Row>
                    <Row justify='center'>
                        <span>Order Online for</span><a href="/">Touchless Delivery</a>
                    </Row>
                </Col>
            </Row>
            <Row justify='center'>
                <Col flex={1}>
                    <Row style={{marginBottom: 30}} justify='center'>
                        <Col span={7}>
                            <Row justify='space-around'>
                                <Col>
                                    <RoundButton style={{width: 264}}>Custom
                                        order</RoundButton>
                                </Col>
                                <Col>
                                    <RoundButton style={{width: 264}}>Existing inventory</RoundButton>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify='center'>
                        <Col>
                            <Icon className='icon' icon={icon.arrowDown} style={{width: '30px'}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
};


export const PreHeader = () => {
    return (
        <Layout style={{background: 'none'}}>
            <Row justify='center'>
                <Col>
                    <a href="/">Read Tesla's 2021 Impact Report</a>
                </Col>
            </Row>
        </Layout>
    );
};

