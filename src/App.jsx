


import './App.css'
import Appbar from './Pages/Appbar'
import About from './Pages/About'
import Intro from './Pages/Intro'
import {Outlet} from 'react-router-dom'
import { useEffect } from 'react'
import FinishTouch from './Pages/FinishTouch'
import BottomBar from './Pages/BottomBar'
import Skill from './Pages/Skill'

import { getprojects } from './utility/actions/ProjectActions'
import { useDispatch } from 'react-redux'
// import { useRef } from 'react'
// import store from './utility/Store'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch])


  return (
    <div >
      <Appbar/>
      <Intro />
     <About/>
     
      <Outlet />

       <Skill/>
       <FinishTouch />
        
      <BottomBar />

       </div>

  )      
}

export default App
