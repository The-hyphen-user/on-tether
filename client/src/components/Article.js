import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:5000/api/ccp/`
})

const Article = ({subject}) => {
    
  const params = useParams();
  const title = params.id;

  console.log("params: ", params);
   
  const [titleText, setTitleText] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setID] = useState('');
  //const [image, setImage] = useState('');
  //setTitleText(title)
  //setID(address)

  

  useEffect( () => {
    updateArticle()
    //console.log(titles)
    })

    const updateArticle = () => {
        api.get(`/${title}`).then(res => {
            api.get(`/${title}`)
                .then(res => {
                    //setTitles(res.data)
                    console.log("data from backend: ", res.data)
                    //const t = res.data
                    setAuthor(res.data[0].author)
                    setText(res.data[0].text)
                    setTitleText(res.data[0].title)

                })

        })

    }

 

    return (
        <div>
            <p>
                article about {titleText}
            </p>
            <p>author:
            {author}
            </p>
            <p>
                text:
                {text}
            </p>
        </div>
    )
}

export default Article
