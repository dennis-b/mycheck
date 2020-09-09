import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { inject } from "mobx-react";

import { User } from "../../../../Api";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { UserDialog } from "./UserDialog";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";

interface Props extends WithHomeStore {
    user: User
}

const UserItemView: any = ({ user, homeStore }: Props) => {

    const { name, email, invitationStatus, id } = user;
    const [open, setOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>()

    const onUserClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleOnRequestClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    const onDecline = () => {
        homeStore.update({ userId: id, invitationStatus: false })
        handleOnRequestClose()
    }
    const onAccept = () => {
        homeStore.update({ userId: id, invitationStatus: true })
        handleOnRequestClose()
    }

    return (
        <>
            <StGrid item xs={4}>
                <Card>
                    <CardContent>
                        <StText textcolor={AppTheme.colors.lightBlue}>
                            {name}
                        </StText>
                        <StText textcolor={AppTheme.colors.gray}>
                            {email}
                        </StText>

                        <StText textcolor={invitationStatus ? AppTheme.colors.darkBlue : AppTheme.colors.red} mt={1}>
                            {invitationStatus ? 'Accepted' : 'Declined'}
                        </StText>

                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={onUserClick}>
                            Manage
                        </Button>
                    </CardActions>
                </Card>
            </StGrid>
            <UserDialog
                open={open}
                anchorEl={anchorEl}
                onClose={handleOnRequestClose}
                user={user}
                onDecline={onDecline}
                onAccept={onAccept}
            />

        </>
    );
};

export const UserItem = inject(homeStoreSelector)(UserItemView)
