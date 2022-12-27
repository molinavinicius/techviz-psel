import { useState, useEffect } from "react"
const getJedis = async (url) => {
    return await fetch(url)
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}

const JediList = () => {

    const [jedisSearch, setJedisSearch] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
    })

    const defineJedis = async (url) => {
        let jedis = await getJedis(url)
        if (jedis)
            setJedisSearch({...jedis})
    }

    useEffect(()=> {
        defineJedis("https://swapi.dev/api/people/")
    }, [])

    return (
        <div>
            <h3>Total of Jedis: {jedisSearch.count}</h3>
            {
                jedisSearch.results.length === 10 ?
                <ul>
                    <li>{jedisSearch.results[0].name}</li>
                    <li>{jedisSearch.results[1].name}</li>
                    <li>{jedisSearch.results[2].name}</li>
                    <li>{jedisSearch.results[3].name}</li>
                    <li>{jedisSearch.results[4].name}</li>
                    <li>{jedisSearch.results[5].name}</li>
                    <li>{jedisSearch.results[6].name}</li>
                    <li>{jedisSearch.results[7].name}</li>
                    <li>{jedisSearch.results[8].name}</li>
                    <li>{jedisSearch.results[9].name}</li>
                </ul>
                :
                <></>
            }
            <div>
                {
                    jedisSearch.previous ?
                    <button onClick={()=>defineJedis(jedisSearch.previous)}>Previous</button>
                    : <></>
                }
                {
                    jedisSearch.next ?
                    <button onClick={()=>defineJedis(jedisSearch.next)}>Next</button>
                    : <></>
                }
            </div>
        </div>
    )
}

export default JediList;