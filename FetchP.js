import { useEffect, useState } from "react"

const FetchP = (url) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading
        fetch(url)
            .then((response)=>response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(()=>setLoading(false))
        console.log(data)
    },[])
    return {data, loading, error}
}

export default FetchP