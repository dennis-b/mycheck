import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import { AppLoader, StContainer } from "../../../../Components";
import { loadData } from "../../../../Api";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";
import { UserList } from "./UserList";

function ContentView({ homeStore }: WithHomeStore) {

    const [loading, setLoading] = useState<boolean>()

    async function loadEntityData() {
        setLoading(true)
        const data = await loadData()
        homeStore.setData(data)
        setLoading(false)
    }

    useEffect(() => {
        loadEntityData()
        // eslint-disable-next-line
    }, [])


    if (loading) {
        return <AppLoader />
    }

    const { data } = homeStore;

    return (
        <StContainer>
            <UserList users={data} />
        </StContainer>
    )
}

const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const Content = enhance(ContentView as any);
