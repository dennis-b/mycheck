import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from "@material-ui/core";

import { User } from "../../../../Api";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { UserDialog } from "./UserDialog";

interface Props {
    user: User
}

export const UserItem: any = ({ user }: Props) => {

    const { name, email, invitationStatus } = user;
    const [open, setOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>()
    const [status, setStatus] = useState<boolean>(invitationStatus)

    const onUserClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleOnRequestClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    const onDecline = () => {
        // homeStore.update({ userId: id, invitationStatus: false })
        setStatus(false)
        handleOnRequestClose()
    }
    const onAccept = () => {
        // homeStore.update({ userId: id, invitationStatus: true })
        setStatus(true)
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

                        <StText textcolor={status ? AppTheme.colors.darkBlue : AppTheme.colors.red} mt={1}>
                            {status ? 'Accepted' : 'Declined'}
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
