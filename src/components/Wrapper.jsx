import React from 'react'
import { Menu } from './Menu'
import {data} from '../data'

const Wrapper = () => {

  return (
    <div className='Wrapper'>
      <Menu data={data} />
    </div>
  )
}

export { Wrapper }