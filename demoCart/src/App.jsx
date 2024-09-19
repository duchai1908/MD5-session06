import React from 'react'

import ListProduct from './components/ListProduct'
import Header from './layouts/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <div className='h-[50px]'></div>
      <ListProduct/>
    </div>
  )
}
