import React, { useContext } from 'react'
import { Context } from '../../components/Context/Context'
import SearchResult from '../../components/Search/SearchResult'

import Slider from '../../components/Slider/Slider'

import './Home.scss'

function Home() {
  const {mysearch} = useContext(Context)
  console.log(mysearch);
 
  return (
    <div className='container'>
      <div className="card__list">
        {
          mysearch ? <SearchResult/> : <Slider/>
          
        }
      </div>
    </div>
  )
}

export default Home