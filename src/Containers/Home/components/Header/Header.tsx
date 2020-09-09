import React from 'react';
import { StContainer, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";

export const Header = () => {
    return (
        <StContainer
            display='flex'
            justify='center'
            width={'100%'}
            pt={2}
            pb={2}
            bgColor={AppTheme.colors.orange}
        >
            <StText
                size={AppTheme.fontSizes.largeX2}
                weight={'bold'}
                textcolor={AppTheme.colors.label}
            >
                Some Cool Event
            </StText>
        </StContainer>
    );
};
