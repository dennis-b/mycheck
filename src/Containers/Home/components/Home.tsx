import React from 'react';
import { Header } from "./Header";
import { Content } from "./Content";
import { StContainer } from "../../../Components";

export const Home = () => {
    return (
        <>
            <Header />
            <StContainer position="relative" height={'100%'} p={1}>
                <Content />
            </StContainer>

        </>
    );
};
