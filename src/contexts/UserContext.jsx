import { createContext, useState } from "react";
import { getUsers } from "../utils/api";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(username) {
        const response = await getUsers()
        const foundUser = response.users.find(singleuser => singleuser.username === username)

        if (foundUser) setUser(foundUser)

        return foundUser
    }
    
    function logout() {
        setUser(null)
    }

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}
