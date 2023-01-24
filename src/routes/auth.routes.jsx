import { Routes, Route } from 'react-router-dom'

import { SigIn } from '../pages/SigIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/sigin' element={<SigIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
    </Routes>
  )
}