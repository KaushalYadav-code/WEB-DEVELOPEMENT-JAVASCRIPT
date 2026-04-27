import React,{useState} from 'react'
import { Link } from 'react-router-dom'

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
      <li><Link to="/">HomePage</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    </>
  )
}

export default HomePage
