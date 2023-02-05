import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faCaretDown,
    faCaretUp,
  } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { SCREENS } from "../responsive";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

 

const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
${tw`
    mb-2
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
`};
`;

const ItemContainer = styled.div`
${tw`flex relative`};
`;

const Icon = styled.span`
${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
`};
`;

const Name = styled.span`
${tw`
    text-gray-600
    text-xs
    md:text-sm
    select-none
`};
`;

const LinseSeperator = styled.span`
width: 2px;
height: 45%;
${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
`};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    ml-1
    md:text-base
    fill-current
  `};
`;

const DateCalendar = styled(Calendar)`
position:absolute;
max-width:none;
user-select:none;
top: 2em;
left: -0em;
cursor-pointer;

${({ offset } : any ) => offset && css`
  left: -6em
`};

@media (min-width: $SCREENS.md ) {
    top: 3.5em;
    left: -2em;
}
` as any;



export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

    console.log(returnDate);

    function OpenStartDate() {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        setIsReturnCalendarOpen(false);
    }

    function OpenReturnDate() {
        setIsReturnCalendarOpen(!isReturnCalendarOpen)
        setIsStartCalendarOpen(false);
    }

    return (
    <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={OpenStartDate}>Pick up Date</Name>
            {isStartCalendarOpen && (
            <DateCalendar 
                value={startDate} 
                onChange={setStartDate as any} />
            )}
            <SmallIcon>
                <FontAwesomeIcon icon={!isStartCalendarOpen ? faCaretDown : faCaretUp} />
            </SmallIcon>
        </ItemContainer>
        <LinseSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={OpenReturnDate}>Return Date</Name>
            {isReturnCalendarOpen && (
            <DateCalendar 
                offset={true}
                value={returnDate}
                onChange={setReturnDate as any} />
            )}
            <SmallIcon>
                <FontAwesomeIcon icon={!isReturnCalendarOpen ? faCaretDown : faCaretUp } />
            </SmallIcon>
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em"/>
        <Button text="Book Your Ride"/>
    </CardContainer>)
}

