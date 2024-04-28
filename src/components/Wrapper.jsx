import React from 'react'
import { MenuContext } from './MenuContext'
import {data} from '../data'

const Wrapper = () => {

  return (
    <div className='Wrapper'>
      <MenuContext data={data} />
    </div>
  )
}

export { Wrapper }