import React from 'react';
import { Button, Popover } from "@material-ui/core";
import { Margin, StContainer, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";

export const UserDialog = ({ user, anchorEl, open, onClose, onDecline, onAccept }) => {
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >

            <StContainer
                p={1}
                bgColor={AppTheme.colors.label}
                width={'12rem'}
                height={'6rem'}
                display='flex'
                direction='column'
                align='center'
            >
                <StText>
                    {user.name}
                </StText>


                <StContainer display='flex' mt={'auto'} mb={0.5}>
                    <Button
                        size="small"
                        color="primary"
                        onClick={onAccept}
                    >
                        Accept
                    </Button>

                    <Margin ml={1} mr={1} />

                    <Button
                        size="small"
                        color="secondary"
                        onClick={onDecline}
                    >
                        Decline
                    </Button>
                </StContainer>

            </StContainer>

        </Popover>
    );
};
