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
    fetch(`https://math-a1n7.onrender.com/grades/${currentBookIdAndName.id}`)
        .then(res => res.json())
        .then(data => setCurrentBookObject(data));

      }, [currentBookIdAndName.id]);
      

    const bookNamesArray = bookObjectsArray.map(item => {
        console.log(item._id)
        return <option key={item._id} onClick={() => setCurrentBookIdAndName({ id: item._id, name: item.name })}>{item.name}</option>
    })
    console.log(currentBookIdAndName)
    return (
        <ProjectContext.Provider value={{ bookNamesArray, currentBookIdAndName }}>
            {children}
        </ProjectContext.Provider>
    )
}
