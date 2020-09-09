import React from 'react';
import { User } from "../../../../Api";
import { UserItem } from "./UserItem";
import { StGrid } from "../../../../Components";

export const UserList = ({ users }: { users: User[] }) => {
    return (
        <StGrid container spacing={2}>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                />
            ))}
        </StGrid>
    );
};

