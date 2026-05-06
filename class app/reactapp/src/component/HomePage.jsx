import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Profile from './Profile'

function HomePage() {
    const [login, setLogin] = useState(false)
//   if(login){
//     return<><button onClick={()=>setLogin(false)}>Logout</button></>
//   }else{
//     return<><button onClick={()=>setLogin(true)}>Login</button></>
//   }

  return (
    <>
    {login?<button onClick={()=>setLogin(false)}>Logout</button>:<button onClick={()=>setLogin(true)}>Login</button>}
    <ul>
      <li><Link to="/homepage">HomePage</Link></li>
      <li><NavLink to="/homepage" style={({isActive})=>({color:isActive?"red":"blue"})}>HomePage</NavLink></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><NavLink to="/contact" style={({isActive})=>({color:isActive?"red":"blue"})}>Contact</NavLink></li>
    </ul>
      <Profile />
    </>
  )
}

export default HomePage
