import { create } from "zustand";

export interface User {   
    username: string;
    password: string;
}

export interface Log {
    users: Array<User>;
    addUser: (user: User) => void;
    checkExist: (user: User) => boolean;
    getUsers: () => Array<User>;
}

const useLog = create<Log>((set) => ({
    users: [],
    
    addUser: (user) => {
        set((state) => {
            const alreadySub = state.users.find((p) => p.username === user.username);
            if (!alreadySub) {
                return { users: [...state.users, user] };
            } else {
                return state; // No change if user already exists
            }
        });
    },

    checkExist: (user) => {
        return !!useLog.getState().users.find((p) => p.username === user.username && p.password === user.password);
    },

    getUsers: () => {
        return useLog.getState().users;
    },
}));

export default useLog;
