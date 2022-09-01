import * as React from 'react';
import {Layout, Typography} from "antd";
import {A, FlexColumn, FlexRow, FlexRowCenter, Section} from "../styles/style";
import styled from "styled-components";
import {Header} from "../components/Header";
import {RoundButton} from "../components/ui/Button";
import {ButtonBackground} from "../core/enums/enum";
import Icon from "../components/ui/Icon";
import icon from '../assets/svg/svg-image';

const {Title} = Typography;

const FixedSection = styled(Section)`
  padding-bottom: 20px;
  position: fixed;
  background: none;
`

export const PreHeader = () => {
    return (
        <FlexRowCenter style={{background: 'white'}}>
            <FlexColumn style={{padding: '10px 0'}}>
                <A href="/">Read Tesla's 2021 Impact Report</A>
            </FlexColumn>
        </FlexRowCenter>

    );
};

const LayoutStyle = styled(Layout)`
  & section:not(.fixed) {
    scroll-snap-align: start;
  }
`


export const Home = () => {
    return (
        <LayoutStyle>
            <FixedSection className="fixed">
                <FlexRowCenter>
                    <FlexColumn span={24} style={{justifyContent: 'space-between', height: '100vh', paddingBottom: '20px'}}>
                        <FlexRowCenter>
                            <FlexColumn span={24}>
                                <PreHeader/>
                                <Header/>
                                <FlexRowCenter style={{marginTop: '30px'}}>
                                    <Title>Model 3</Title>
                                </FlexRowCenter>
                                <FlexRowCenter>
                                    <span style={{marginRight: '5px'}}>Order Online for</span>
                                    <A href="/">Touchless Delivery</A>
                                </FlexRowCenter>
                            </FlexColumn>
                        </FlexRowCenter>
                        <FlexRowCenter>
                            <FlexColumn flex={1}>
                                <FlexRowCenter style={{marginBottom: '50px'}}>
                                    <FlexColumn span={7}>
                                        <FlexRow justify='space-around'>
                                            <FlexColumn span={10}>
                                                <RoundButton color={ButtonBackground.BLACK}>Custom
                                                    order</RoundButton>
                                            </FlexColumn>
                                            <FlexColumn span={10} offset={1}>
                                                <RoundButton color={ButtonBackground.WHITE}>Existing
                                                    inventory</RoundButton>
                                            </FlexColumn>
                                        </FlexRow>
                                    </FlexColumn>
                                </FlexRowCenter>
                                <FlexRowCenter>
                                    <FlexColumn>
                                        <Icon className='icon' icon={icon.arrowDown} style={{width: '30px'}}/>
                                    </FlexColumn>
                                </FlexRowCenter>
                            </FlexColumn>
                        </FlexRowCenter>
                    </FlexColumn>
                </FlexRowCenter>
            </FixedSection>
            <Section image={'../assets/images/background3.jpg'} background='aqua'>
            </Section>
            <Section image={'../assets/images/background1.jpg'} background='green'>
            </Section>
            <Section image={'../assets/images/background2.jpg'} background='blue'>
            </Section>
        </LayoutStyle>
    );
};

