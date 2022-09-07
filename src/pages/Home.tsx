import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';

import {Layout, Typography} from "antd";
import {A, FlexColumn, FlexRow, FlexRowCenter, SectionStyle} from "../styles/style";
import styled from "styled-components";
import {Header} from "../components/Header";
import {RoundButton} from "../components/ui/Button";
import {ButtonBackground} from "../core/enums/enum";
import Icon from "../components/ui/Icon";
import icon from '../assets/svg/svg-image';
import {UpDownCSS} from "../styles/globalStyle";

const {Title} = Typography;

const FixedSectionStyle = styled(SectionStyle)`
  height: calc(100vh - 10px);
  position: fixed;
  background: none;
  align-items: stretch;
  display: flex;
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

const IconWithAnimation = styled(Icon)`
  ${UpDownCSS}
`

function scroll(e: Event) {
    console.log(e)
}

const sectionsData = [{
    title: 'Model 3',
    description: 'Order Online for',
    link: 'Touchless Delivery',
    buttons: {left: 'Custom order', right: 'Existing inventory'}
}, {
    title: 'Model Y',
    description: 'Order Online for',
    link: 'Touchless Delivery',
    buttons: {left: 'Custom order', right: 'Existing inventory'}
}, {
    title: 'Model S',
    description: 'Order Online for',
    link: 'Touchless Delivery',
    buttons: {left: 'Custom order', right: 'Existing inventory'}
},
//     {
//     title: 'Model S',
//     description: 'Order Online for',
//     link: 'Touchless Delivery',
//     buttons: {left: 'Custom order', right: 'Existing inventory'}
// }, {
//     title: 'Solar Roof',
//     description: 'Order Online for',
//     link: 'Touchless Delivery',
//     buttons: {left: 'Custom order', right: 'Existing inventory'}
// }, {
//     title: 'Solar Panels',
//     description: 'Order Online for',
//     link: 'Touchless Delivery',
//     buttons: {left: 'Custom order', right: 'Existing inventory'}
// }
]


export const Home = () => {
    const IDref = useRef(0);
    const [currentSection, setCurrentSection] = useState(sectionsData[IDref.current])

    const countSections = sectionsData.length

    let visible = function (target: any) {


        const viewportHeight =
            window.innerHeight - 5

        const element = document.elementFromPoint(900, viewportHeight);

        if(element !== null) {
            const dataID = Number(element.getAttribute('data-id'))
            if(dataID !== IDref.current) {

                IDref.current = dataID
                setCurrentSection(sectionsData[dataID - 1])
            }
        }


        // const height =
        //     document.documentElement.scrollHeight -
        //     document.documentElement.clientHeight
        //
        // const halfClientHeight = (document.documentElement.scrollHeight / countSections) / 2

    };

    const visibleCallback = useCallback(visible, []);


    useEffect(() => {
        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', visibleCallback);

        return () => window.removeEventListener('scroll', visibleCallback)
    }, [visibleCallback]);


    return (
        <LayoutStyle>

            <FixedSection {...currentSection} id={IDref.current} />
            <SectionStyle data-id={1} image={'../assets/images/background3.jpg'}/>
            <SectionStyle data-id={2} image={'../assets/images/background1.jpg'}/>
            <SectionStyle data-id={3} image={'../assets/images/background2.jpg'}/>
        </LayoutStyle>
    );
};


function scrollDown() {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    })
}


type FixedSectionProps = { title: string, description: string, link: string, buttons: { left: string, right: string } } & {id: number}

function FixedSection({title, description, link, buttons, id}: FixedSectionProps) {

    return (
        <FixedSectionStyle className="fixed">
            <FlexRowCenter>
                <FlexColumn span={24} style={{justifyContent: 'space-between'}}>
                    <FlexRowCenter>
                        <FlexColumn span={24}>
                            {/*<PreHeader/>*/}
                            <Header/>
                            <FlexRowCenter style={{marginTop: '80px'}}>
                                <Title>{title}</Title>
                            </FlexRowCenter>
                            <FlexRowCenter>
                                <span style={{marginRight: '5px'}}>{description}</span>
                                <A href="/">{link}</A>
                            </FlexRowCenter>
                        </FlexColumn>
                    </FlexRowCenter>
                    <FlexRowCenter>
                        <FlexColumn flex={1}>
                            <FlexRowCenter style={{marginBottom: '50px'}}>
                                <FlexColumn span={7}>
                                    <FlexRow justify='space-around'>
                                        <FlexColumn span={10}>
                                            <RoundButton color={ButtonBackground.BLACK}>{buttons.left}</RoundButton>
                                        </FlexColumn>
                                        <FlexColumn span={10} offset={1}>
                                            <RoundButton color={ButtonBackground.WHITE}>{buttons.right}</RoundButton>
                                        </FlexColumn>
                                    </FlexRow>
                                </FlexColumn>
                            </FlexRowCenter>
                            {id === 1 &&
                            <FlexRowCenter>
                                <FlexColumn span={1}>
                                    <FlexRowCenter>
                                        <IconWithAnimation size={3} icon={icon.arrowDown} onClick={scrollDown}/>
                                    </FlexRowCenter>
                                </FlexColumn>
                            </FlexRowCenter>}
                        </FlexColumn>
                    </FlexRowCenter>
                </FlexColumn>
            </FlexRowCenter>
        </FixedSectionStyle>
    )
}
