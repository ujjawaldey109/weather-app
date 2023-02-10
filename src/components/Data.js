import React from 'react'

const Data = ({data,loading,error,value}) => {
    if(data!==undefined){
        return <div className='text'>
        Current Tempreature {data.temp}
       <div className='flex'>
       <div className='values'> min temp<div>{data.min_temp}</div></div>
       <div className='values'>max temp <div>{data.max_temp}</div></div>
       <div className='values'>cloud %<div>{data.cloud_pct}</div></div>
       <div className='values'>feels like<div> {data.feels_like}</div></div>
       <div className='values'>humidity<div> {data.humidity}</div></div>
       </div>
        </div>
     }
    if(loading){
        return <div className='text'>
            Currently loading data
        </div>
    }
    if(error){
        return <div 
        className='text'
        >Errors try again later</div>
    }
  return (
    <div>
      
    </div>
  )
}

export default Data