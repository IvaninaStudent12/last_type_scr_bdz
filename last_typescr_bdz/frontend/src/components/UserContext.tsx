// UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext<{ username: string | null, setUsername: React.Dispatch<React.SetStateAction<string | null>> }>({
    username: null,
    setUsername: () => {}
});

export const UserProvider: React.FC = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
