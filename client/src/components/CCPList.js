import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import Label from './Label'

import {Link} from 'react-router-dom'

const api = axios.create({
    baseURL: `http://localhost:5000/api/ccp/`
})


const CCPList = () => {
    const [titles, setTitles] = useState([])
/*
    useEffect(async () => {
        api.get('/ccp')
            .then(res => {
                setTitles(res.data)
            })
    })
    */

    //const t = []

    useEffect( () => {
        updateTitleList()
        //console.log(titles)
    })
    const updateTitleList = () => {
        api.get('/').then(res => {
            api.get('/')
                .then(res => {
                    setTitles(res.data)
                    //console.log(res.data)
                    //const t = res.data
                })

        })

    }


    /*
    //titles.map((title) => {
        <li>title</li>
    })
    
    
    */

    return (
        <div>
            <p>on ccplist </p>
            <div>
                {titles.map((e) => {
                    return <Label key={e._id} address={e._id} title = {e.title}></Label>
            })}
            </div>
            
        </div>
    )
}

export default CCPList
//<Link to={title}>{title}</Link>


/*


            <ul>
                {
                    titles.map(title =>(

                        <li>
                            {title}
                        </li>
                    ))}
            </ul>






            <div>
                <p>links</p>
                <nav>
                    {titles.map((e) => {
                        return <Link key={e._id} to={e.title}>{e.title}</Link>
                    })}
                </nav>
            </div>

*/