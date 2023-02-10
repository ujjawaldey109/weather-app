import React, { useState } from 'react'
import axios from 'axios';
import Data from './Data';
const Weather = () => {
  const [value,setValue]=useState("");
  const [data,setData]=useState({})
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(true)
  const handleChange=(e)=>{
    e.preventDefault() 
    setValue(e.target.value)
     setLoading(true)
    axios.request(options).then(function (response) {
      setLoading(true)
      console.log(response.data);
      setData(response.data)
      setError("")
      setLoading(false)
    }).catch(function (error) {
      console.error(error);
      setError(error.message)
      setLoading(false)
    }); 
  }
  const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: {city: value},
    headers: {
      'X-RapidAPI-Key': '8d2ec7100amsh90b8743c2fa0bc7p1362c4jsnd079f72bf2bd',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  return (
    <div className='app'>
        <form onSubmit={handleChange}>
            <div className='box'>
              <input type="text" onChange={(e)=>setValue(e.target.value)}
              className="input"
              placeholder='City Name'
              />
              <button onClick={handleChange}>Submit</button>
            </div>
        </form>
        <Data data={data} loading={loading} error={error} value={value} />
    </div>
  )
}

export default Weather