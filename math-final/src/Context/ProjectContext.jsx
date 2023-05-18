import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {

    const [bookObjectsArray, setBookObjectsArray] = useState([])
    const [currentBookIdAndName, setCurrentBookIdAndName] = useState({
        id: "",
        name: ""
    })
    const [currentBookObject, setCurrentBookObject] = useState({})

    useEffect(() => {
        fetch("https://math-a1n7.onrender.com/grades")
            .then(res => res.json())
            .then(data => setBookObjectsArray(data));
    }, []);

    useEffect(() => {
        fetch(`https://math-a1n7.onrender.com/grades/${currentBookIdAndName.id}`)
            .then(res => res.json())
            .then(data => setCurrentBookObject(data));
    }, [currentBookIdAndName.id])

    const bookNamesArray = bookObjectsArray.map(item => {
        return <option key={item._id} onClick={() => setCurrentBookIdAndName({ id: item._id, name: item.name })}>{item.name}</option>
    })

    let currentBookTopics = [];
    if (typeof currentBookObject.topics != 'undefined') {
        currentBookTopics = currentBookObject.topics.map(item => {
            return item
        })
    }

    return (
        <ProjectContext.Provider value={{ bookNamesArray, currentBookIdAndName, currentBookTopics }}>
            {children}
        </ProjectContext.Provider>
    )
}
