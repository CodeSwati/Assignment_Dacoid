
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Status from './components/Status'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  

  return (

    <div className='w-[375px] h-[44px] sm:w-full sm:h-full font-sans p-4'>
      <Status/>

      <Router>
        <Routes >
        
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
