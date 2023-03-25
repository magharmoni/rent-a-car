import { faCarSide, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
width: 100%;
    ${tw`
        bg-black
        flex
        flex-col
        justify-center
        items-center
    `};
`;

const ContentContainer = styled.div`
    ${tw`
        max-w-screen-2xl
        flex
        flex-wrap
        text-white
    `};
`;

const LogoContainer = styled.div`
width: 400px;

    ${tw`
        mt-10
        flex
        flex-col
        ml-2
    `};
`;

const LogoText = styled.p`
    ${tw`
        text-sm
    `};
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        text-white
        font-bold
        mb-3
    `};
`;

const LinksContainer = styled.div`
    width: 180px;
    ${tw`
        mt-10
        mr-2
        ml-2
    `};
`;


const Links = styled.p`
    ${tw`
        text-sm
        mb-2
        text-white
    `};
`;

const ContactinfoContainer = styled.div`
    ${tw`
        flex
        flex-row
        items-center
        mb-3
    `};
`;

const EmailContainer = styled.div`
width: 240px;
    ${tw`
        flex
        flex-row
        items-center
        mb-3

    `};
`;


const ContactinfoIcon = styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-base
        mr-2
    `};
`;

const SmallText = styled.div`
    ${tw`
        text-sm
    `};
`;

export function Footer() {
    return (
        <FooterContainer>
            <ContentContainer>
                <LogoContainer>
                    <Logo/>
                    <LogoText>Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service. </LogoText>
                </LogoContainer>  
                <LinksContainer>
                    <HeaderTitle>Our Links</HeaderTitle>             
                    <Links>Home</Links>
                    <Links>About us</Links>
                    <Links>Service</Links>
                    <Links>Models</Links>
                    <Links>Blog</Links>
                </LinksContainer>
                <LinksContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <Links>FAQ</Links>
                    <Links>Contact Us</Links>
                    <Links>Support</Links>
                    <Links>Privacy Policy</Links>
                    <Links>Terms and Conditions</Links>
                </LinksContainer>
                <LinksContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <ContactinfoContainer>
                        <ContactinfoIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </ContactinfoIcon>
                        <SmallText>+46 73 55 705</SmallText>
                    </ContactinfoContainer>
                </LinksContainer>
                <LinksContainer>
                    <HeaderTitle>E-mail</HeaderTitle>
                    <EmailContainer>
                        <ContactinfoIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </ContactinfoIcon>
                        <SmallText>anton@magharmoni.se</SmallText>
                    </EmailContainer>
                </LinksContainer>
            </ContentContainer>
        </FooterContainer>
    )
}