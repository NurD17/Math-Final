import React from 'react'
import './main/LearnPageContent.scss'
import { ProjectContext } from '../Context/ProjectContext'
import { Link } from 'react-router-dom'

function AccordionItem(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={props.h2Id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={props.databstarget} aria-expanded="true" aria-controls={props.divId}>
                    <h2 className='accordion--heading'>График функции</h2>
                    <h5 className='accordion--subheading'>Линейное уравнение</h5>
                </button>
            </h2>
            <div id={props.divId} className="accordion-collapse collapse" aria-labelledby={props.h2Id} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <Link to={'/'}>Линейное уравнение</Link>
                </div>
                <div className="accordion-body">
                    <Link to={'/'}>Линейное уравнение</Link>
                </div>
                <div className="accordion-body">
                    <Link to={'/'}>Линейное уравнение</Link>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem