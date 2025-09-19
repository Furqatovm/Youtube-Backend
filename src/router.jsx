import React from 'react'
import { Routes, Route } from "react-router-dom"
import Mainlayout from './components/main-layout'
import Explore from './components/main-layout/explore'
import Home from './components/home/home'
import Product from './routes/product'

const Router = () => {

  return (
    <div className='bg-[#212121]'>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Home />} />
            <Route path={`/about/:id`}  element={<Product />}/>
          <Route path='/explore' element={<Explore />} />
        </Route>

        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div>
    
    // dlakdlakldlkakldkla
  )
}

export default Router
