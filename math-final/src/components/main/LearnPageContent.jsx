import React, { useContext } from 'react'
import '../main/LearnPageContent.scss'
import { ProjectContext } from '../../Context/ProjectContext'
import AccordionItem from '../AccordionItem'

function LearnPageContent() {
    const {currentBookIdAndName, currentBookTopics} = useContext(ProjectContext)
    const currentBookTopicsArray = currentBookTopics.map(object => {
        return <AccordionItem topic={object.name} unit={object.units} h2Id={`heading${object._id}`} divId={`collapse${object._id}`} databstarget={`#collapse${object._id}`} key={object._id}/>
    })
    return (
        <div className="container">
            <h1 className='learnPageHeading'>{currentBookIdAndName.name}</h1>
            <div className="accordion" id="accordionExample">
                {currentBookTopicsArray}
            </div>
        </div>
    )
}

export default LearnPageContent