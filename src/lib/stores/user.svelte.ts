import type { UserProfile } from '$lib/types/user';
import { firekitDoc, firekitDocMutations, firekitUser } from 'svelte-firekit';

class UserProfileDoc {
    private static instance: UserProfileDoc;
    private _userData = $derived(firekitDoc<UserProfile>(`users/${firekitUser.uid}`));

    private constructor() { }

    public static getInstance(): UserProfileDoc {
        if (!UserProfileDoc.instance) {
            UserProfileDoc.instance = new UserProfileDoc();
        }
        return UserProfileDoc.instance;
    }

    get data() {
        if (!this._userData) {
            return undefined;
        }
        return this._userData.data;
    }

    get loading() {
        return this._userData.loading;
    }

    get error() {
        return this._userData.error;
    }

    async update(data: Partial<UserProfile>) {
        await firekitDocMutations.update(`users/${firekitUser.uid}`, data);

        // Check for displayName
        if (data.displayName && data.displayName !== firekitUser.displayName) {
            await firekitUser.updateDisplayName(data.displayName);
        }

        if (data.photoURL && data.photoURL !== firekitUser.photoURL) {
            await firekitUser.updatePhotoURL(data.photoURL);
        }

        if (data.email && data.email !== firekitUser.email) {
            await firekitUser.updateEmailUser(data.email);
        }
    }
}

export const userProfile = UserProfileDoc.getInstance();