import React, { useContext } from 'react'
import '../main/LearnPageContent.scss'
import { ProjectContext } from '../../Context/ProjectContext'
import AccordionItem from '../AccordionItem'

function LearnPageContent() {
    const {currentBookIdAndName} = useContext(ProjectContext)

    return (
        <div className="container">
            <h1 className='learnPageHeading'>{currentBookIdAndName.name}</h1>
            <div className="accordion" id="accordionExample">
                <AccordionItem h2Id={"headingOne"} divId={"collapseOne"} databstarget={"#collapseOne"}/>
                <AccordionItem h2Id={"headingTwo"} divId={"collapseTwo"} databstarget={"#collapseTwo"}/>
                <AccordionItem h2Id={"headingThree"} divId={"collapseThree"} databstarget={"#collapseThree"}/>
            </div>
        </div>
    )
}

export default LearnPageContent