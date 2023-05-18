import { createContext, useState } from "react";

export const ProjectContext = createContext()

export const ProjectContextProvider = ({children}) => {

    const [testMessage, setTestMessage] = useState("Hello, World!")

    return (
        <ProjectContext.Provider value={testMessage}>
            {children}
        </ProjectContext.Provider>
    )
}
