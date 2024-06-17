import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
    username: string | null,
    phone: string | null,
    email: string | null,
    setUsername: (username: string | null) => void,
    setPhone: (phone: string | null) => void,
    setEmail: (email: string | null) => void,
}

const UserContext = createContext<UserContextType>({
    username: null,
    phone: null,
    email: null,
    setUsername: () => {},
    setPhone: () => {},
    setEmail: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
    const [username, setUsernameState] = useState<string | null>(null);
    const [phone, setPhoneState] = useState<string | null>(null);
    const [email, setEmailState] = useState<string | null>(null);

    const setUsername = (username: string | null) => {
        setUsernameState(username);
        sessionStorage.setItem('username', username || '');
    };

    const setPhone = (phone: string | null) => {
        setPhoneState(phone);
        sessionStorage.setItem('phone', phone || '');
    };

    const setEmail = (email: string | null) => {
        setEmailState(email);
        sessionStorage.setItem('email', email || '');
    };

    return (
        <UserContext.Provider value={{ username, phone, email, setUsername, setPhone, setEmail }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
