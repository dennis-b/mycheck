import { action, observable } from "mobx";
import { AppStore } from "../../App/AppStore";
import { User } from "../../Api";

export const homeStoreSelector = ({ appStore }: { appStore: AppStore }) => ({ homeStore: appStore.homeStore });

export interface WithHomeStore {
    homeStore: HomeStore
}

export class HomeStore {

    @observable data: User[] = [];

    rootStore: AppStore;

    constructor(rootStore: AppStore) {
        this.rootStore = rootStore;
    }

    @action
    setData = (data: User[]) => {
        this.data = data
    };

    @action
    update = ({ userId, invitationStatus }) => {
        const user = this.data.find(user => user.id === userId)
        if (user) {
            user.invitationStatus = invitationStatus;
        }
    };
}
