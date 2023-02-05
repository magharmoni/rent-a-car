import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt, faCarSide, faMapMarkedAlt
  } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        mt-20
        lg:pt-6
        lg:pb-6
        lg:mb-12
    `};
`;

const Title = styled.h2`
    ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `};
`;

const StepsContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
  flex
  flex-col
  md:w-96
  items-center
  transition-colors
  hover:text-red-500
  m-3
  `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
    ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `};
`;

const StepDescription = styled.span`
    ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `};
`;

const StepIcon = styled.span`
    ${tw`
        text-red-500
        text-3xl
    `};
`;

export function BookingsSteps() {
    return (
        <Container>
            <Title>How to book</Title>
            <StepsContainer>
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Choose your Location</StepTitle>
                    <StepDescription>Find the nearest Yourcar point and book your car.</StepDescription>
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Pick-up Date</StepTitle>
                    <StepDescription>Pick the Best Date to rent a car for you.</StepDescription>
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCarSide}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Book your Car</StepTitle>
                    <StepDescription>Book your nice car.</StepDescription>
                </StepContainer>
            </StepsContainer>
        </Container>
    )
}