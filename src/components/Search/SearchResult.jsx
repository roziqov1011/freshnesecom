import React, { useContext, useEffect, useRef, useState } from 'react'
import { data1 } from '../../data/data1'
import { data2 } from '../../data/data2'
import Card from '../Card/Card'
import { Context } from '../Context/Context'
import './SearchResult.scss'

function SearchResult() {
  const reff = useRef()
  const product = data2
  const [filData, setfilData] = useState([])
  useEffect(()=>{
    data1.map((e,i)=>{
      e.id = 91 + i;
      product.push(e)
    })
    
  },[])
  const {mysearch} = useContext(Context)
  useEffect(()=>{
    setfilData(product.filter((e)=> e.name.toLowerCase().indexOf(mysearch.toLowerCase()) != -1))
    
  },[mysearch])
  console.log(filData);

  return (
    <div>
        <div ref={reff} className='SearchResult'>
          {
            product.filter((e)=> e.name.toLowerCase().indexOf(mysearch.toLowerCase()) != -1).map((e,i)=>(
              <Card key={i} item={e}/>
            ))
          }
        </div>
    </div>
  )
}

export default SearchResult