import React, {useState} from 'react'

function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name)
        console.log("Email", email)
        console.log("Message", message)
    }
  return (
    <div>
        <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter your email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea type="text" placeholder='Enter your message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button className='bg-white text-black w-20' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact