import React from 'react'
import { useState } from 'react'
import  data from './Data.js'
import './Accordion.css'
const accordion = () => {
    const [selected,setSelected]=useState(null)
 

    function handleSingleSelection(getCurrentId){
        // console.log(getCurrentId)
        setSelected(getCurrentId=== selected? null : getCurrentId)
    }
    console.log(selected)
  return (
    <div className='wrapper'>
        <div className='accordion'>
            {
                data&&data.length > 0 ? data.map(dataItem=> <div className='item'>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {selected===dataItem.id ? <div className='content'>{dataItem.answer}</div>:null}
                </div>) : <div>no data found</div>
            }
        </div>
     
    </div>
  )
}

export default accordion
