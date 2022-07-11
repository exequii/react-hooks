import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => setData(data.results))
    }, [url])
    
    return data
}

export default useFetch