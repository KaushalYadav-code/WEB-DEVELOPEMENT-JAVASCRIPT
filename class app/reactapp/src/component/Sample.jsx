
import React,{Component, useState, useEffect, useRef} from 'react'
import style from '../css/Sample.module.css'
import style1 from '../css/HomePage.module.css'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import axios from 'axios'

function Sample(props) {
    const [name,setName]=useState("Devendra")
    const [age,setAge]=useState(20)
    const [loading, setLoading] = useState(false)
    const inputRef=useRef(null)

    useEffect(()=>{
        
        console.log("Component mounted")
        return ()=>{
            console.log("Component unmounted")
        }
    },[name])

    useEffect(()=>{
        // async function fetchingData(){
        //     const response=await fetch("https://dummyjson.com/products",{
        //         method:"GET"
        //     })
        //     const data=await response.json()
        //     console.log(data)
        // }

        async function fetchingData(){
            try{
                setLoading(true)
                const response=await axios.get("https://dummyjson.com/products/")
            console.log(response.data)
            setLoading(false)
            }catch(error){
                console.log(error)
            }
            }
        
        fetchingData()

        inputRef.current.value="Hello"
        inputRef.current.focus()
        },[])
    

  return (
    <div>
        {loading?<h1>Loading...</h1>:<h1></h1>}
      <h2>Trending topics</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
      <h3>{name}</h3>
        <button onClick={()=>{
            setName("Alex")
            
        }}>Name Change</button>

        <input type='text' placeholder='"Enter the text' ref={inputRef}></input>
    <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
    >
        Count is {props.count}
    </button>
    <div>
        <Button >First</Button>
        <Button green>Second</Button>
        <button css={buttonStyle}>Third</button>
        <button className='bg-red-500 text-white w-20 h-8'>Fourth</button>
    </div>
    </div>
  )
}

export default Sample

const buttonStyle=css`
    background-color: orange;
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border:none
`

const Button=styled.button`
    background-color: ${(props) => (props.green ? "green" : "red")};
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border:none
`

// class Sample extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             name:"Devendra",
//             age:23
//         }
//     }
//     componentDidMount(){
//         console.log("Component Did Mount")
//     }

//     shouldComponentUpdate(nextProps,nextState){  //tels whether to update or not
//         if(nextProps.count===1){
//             return false
//         }
//         console.log("Component Should Update")
//         return true
//     }

//     componentDidUpdate(){
//         console.log("Component Did Update")
//     }

//     componentWillUnmount(){
//         console.log("Component Will Unmount")
//     }


//     render(){
//         return (
//             <div>
//             <h2>Trending topics</h2>
//             <h3>{this.state.name}</h3>
//             <button onClick={()=>{
//                 this.setState({name:"Alex"})
                
//                 }}>Name Change</button>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
//             <button
//                 style={{backgroundColor:"red"}}
//                 onClick={() => this.props.setCount((count) => count + 1)}
//             >
//                 Count is {this.props.count}
//             </button>
            
//             </div>
//         )
//     }

// }
// export default Sample
