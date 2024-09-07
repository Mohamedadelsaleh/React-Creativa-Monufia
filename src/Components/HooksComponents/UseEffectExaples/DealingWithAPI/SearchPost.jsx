import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SearchPost() {

    const [id, setId]= useState(1);
    const [post, setPost]= useState({})
    const [idFromButton, setIdFromButton] = useState(1)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            console.log(response.data);
            
            setPost(response.data)
        })
    }, [idFromButton])


    const handleSearch = ( ) => {
        setIdFromButton(id)
    }


  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <h3>{post.title}</h3>
    </div>
  )
}

export default SearchPost