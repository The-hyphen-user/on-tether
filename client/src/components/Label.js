import React from 'react'
import {Link} from 'react-router-dom'

const Label = ({address, title}) => {


    return (
        <div>
            <nav>
                <p>"key: "{address}</p>
                <Link to={title}>{title}
                </Link>
            </nav>
        </div>
    )
}

export default Label
