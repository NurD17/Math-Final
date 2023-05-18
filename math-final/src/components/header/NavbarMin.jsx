import React, {useContext} from 'react'
import './NavbarMin.scss'
import { ProjectContext } from '../../Context/ProjectContext'

function NavbarMin() {
  const {bookNamesArray} = useContext(ProjectContext)
  return (
    <div className='navbar'>
      <div className="container">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Китептер</option>
          {bookNamesArray}
        </select>
        <h1 className='navbar--heading'>Сана</h1>
      </div>
    </div>
  )
}

export default NavbarMin