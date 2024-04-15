
import CreateAccount from './components/CreateAccount'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Status from './components/Status'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Welcome from './components/Welcome'
import GoalPage from './components/GoalPage'
import Tracker from './components/Tracker'
import Schedule from './components/Schedule'
import { PiCellSignalFullBold } from "react-icons/pi";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFullOutline } from "react-icons/io5";
function App() {
  

  return (

    <div className='w-[375px] h-[44px] sm:w-full sm:h-full flex  flex-col font-sans p-4'>
       <div className=' flex justify-between'>
          <p className='font-semibold text-sm'>9:41</p>
          <div className='flex gap-2'>
            <PiCellSignalFullBold />
            <IoIosWifi />
            <IoBatteryFullOutline />
          </div>
      </div>

      <Router>
        <Routes >
        <Route path='/' element={<Status/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/createPage' element={<CreateAccount/>}/>
          <Route path='/welcomePage' element={<Welcome/>}/>
          <Route path='/goalPage' element={<GoalPage/>}/>
          <Route path='/trackerPage' element={<Tracker/>}/>
          <Route path='/schedulePage' element={<Schedule/>}/>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
