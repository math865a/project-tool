import { useState } from "react";
import { UserData } from "~/src/_definitions";

export const usePresence = (initialOnlineUsers: UserData[]) => {
    const [onlineUsers, setOnlineUsers] =
        useState<UserData[]>(initialOnlineUsers);

    const addPresences = (users: UserData[]) => {
        setOnlineUsers((prev) => [...prev, ...users]);
    };

    const addPresence = (user: UserData) => {
        setOnlineUsers((prev) => [...prev, user]);
    };

    const removePresence = (uid: string) => {
        setOnlineUsers((prev) => prev.filter((user) => user.uid !== uid));
    };
    /*
    useEffect(() => {
        socket.on("presence:join", addPresence);
        socket.on("presence:leave", removePresence);
        socket.on("presence:initial", addPresences);

        return () => {
            socket.off("presence:join", addPresence);
            socket.off("presence:leave", removePresence);
            socket.off("presence:initial", addPresences);
        };
    }, []);*/

    return onlineUsers;
};
