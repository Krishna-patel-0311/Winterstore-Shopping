import { React, useContext} from 'react'
import Admin from './SideBar/Admin';
import { AppContext } from './context'
import User from './SideBar/User';
import AnimatedRoute from './AnimatedRoute';




export default function SideBar() {
  const { IsAdmin} = useContext(AppContext)
  
  return (

    <div className="wrapper" >
   {IsAdmin? <Admin/>:<User/>}

      <main className='content container-fluid mt-3 mb-3'>
      <AnimatedRoute/>
      </main>
    </div>

  )
}
