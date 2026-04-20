// console.log("Helo welcome to the advanced class")




// let obj={
//     name:"Devendra",
//     location:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     location:"Gurgaon",
//     age:23
// }

// obj.age=66
// console.log(obj)

// const para=document.querySelector("p")
// para.textContent="this is updated one"
// // console.log(para)

// console.info(document)

// let obj={
//     name:"Devendra",
//     phone:65754645644,
//     address:"GGN"
// }

// let obj2={
//     name:"Alex",
//     phone:65754645644,
//     address:"GGN"
// }

// obj2.name="Bob"
// console.log(obj2.name)

// const para=document.getElementById('para')
// // para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)

// const para=document.getElementById('para')
// // para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)// const para=document.getElementById('para')

// const para=document.getElementsByClassName('para')
// para[0].textContent="This is now updated paragraph"
// para[1].style.color="green"
// console.log(para)
// para.forEach((ele)=>console.log(ele.textContent))

// const para2=document.querySelectorAll('.para')
// para2[0].textContent="This is now updated paragraph"
// para2[1].style.color="green"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContent))


// const para=document.querySelector('.para')
// para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)


// let arr=[12,4,65,3,324,56]

// arr.forEach((ele)=>console.log(ele))

// const para2=document.querySelectorAll('.para')
// para2[0].innerText="This is now updated paragraph" //does not work on hidden text
// para2[0].textContent="This is now updated paragraph"
// para2[1].style.color="green"
// para2[1].innerHTML="<div><b>Hello</b> World</div>"
// console.log(para2)


// const button=document.querySelector('button')

// button.classList.add('btn')
// // button.classList.remove('btn')
// // button.classList.toggle('btn')

// function message(event){
//     console.log(event)
//     alert("You have clicked the button")
// }
// button.addEventListener('click',message)
// button.removeEventListener('click',message)

// const button=document.querySelector('#btn')
// const button2=document.querySelector('#stop')

// button.addEventListener('click',message)

// button2.addEventListener('click',function(){
//     button.removeEventListener('click',message)
// })


// const btn=document.querySelector("#btn")
// btn.addEventListener('keydown',function(event){
//     console.log(event.key)
// })

// btn.addEventListener('keyup',function(event){
//     console.log(event.key)
// })

// const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log("Form submitted")
// }

// const form=document.querySelector('form')
// form.addEventListener('submit',handleSubmit)

// console.log("Updated Code")

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")

// btn.addEventListener("click",function(){ console.log("button")},true)
// div.addEventListener("click",function(){ console.log("Div")},true)
// div2.addEventListener("click",function(){ console.log("Div2")},true)

// debugger
// console.log(a)
// // console.log(b)

// var a=78  //part of global scope
// let b=345  //stored in script scope

// console.log(a)
// console.log(b)


// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside fn")
// }

// print()
// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()


// function infinite(){
//     infinite()
// }
// infinite()


// console.log(a)
// console.log(b)
// console.log(c)

// let a=345
// var b=567

// let total=100

// function calculate(){
//     console.log(total)
//     var total=100
// }
// calculate()


// console.log("First Line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second Line")


// setTimeout(()=>{
//     alert("Alert after 3 sec!!")
// },3*1000)

// const timerId=setInterval(()=>{
//     console.log("Hello students!")
// },1000) 

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// let count=1;

// const id=setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count+=1
// },1000)


// console.log("First Line")
// const id=setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// clearTimeout(id)
// console.log("Second Line")


// function print(name){  //callback fn
//     console.log("Hello studentss!!", name)
// }

// function greet(num){  //higher order fn
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside SetTimeout")
//         let firstNAme="Alex"
//         num(firstNAme)
//     }, 2000);
// }

// greet(print)


// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert("Enter task")
//         return
//     }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"
//     li.innerText=input.value

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener('click',()=>{
//         lists.removeChild(li)
//     })
//     input.value=""
// })

// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("network issue")
//         }
//     },5000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally block")
// })

// function doHomework(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework complete")
//             }else{
//                 reject("Homework is not done")
//             }
//         },2000)
//     })
//     return p
// }

// function eatDinner(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Dinner is done")
//                 resolve("Dinner complete")
//             }else{
//                 reject("Dinner is not done")
//             }
//         },2000)
//     })
//     return p
// }

// function goToPlayground(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=false;
//             if(done){
//                 console.log(" Went to the Playground")
//                 resolve("Playground Time")
//             }else{
//                 reject("Not allowed to play")
//             }
//         },2000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })


// console.log("First Line")
// setTimeout(()=>{
//    console.log("Inside Timeout") 
// },0)
// const p=new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside Catch")
// })
// console.log("Last Line")

// const form=document.querySelector("#form")
// const eventCards=document.querySelector(".event_cards")

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(eventTitle.value)
//     console.log(eventDate.value)
//     console.log(category.value)
//     console.log(description.value)
//     const card=document.createElement('div')
//     card.classList.add('event_card')
//     card.innerHTML=`
//         <h3>${eventTitle.value}</h3>
//         <p>${eventDate.value}</p>
//         <button>${category.value}</button>
//         <p>${description.value}</p>
//         <button class="deletebtn">x</button>
//         `
//     // eventCards.appendChild(card)  
//     // const dltButton=document.querySelector('.deletebtn')
//     // dltButton.addEventListener('click',()=>{
//     //     card.remove()
//     // })
// })


// function orderFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Ordered")
//             resolve("Food Ordered")
//         },1000)
//     })
// }

// function prepareFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Prepared")
//             resolve("Food Prepared")
//         },1000)
//     })
// }

// function deliverFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Delivered")
//             resolve("Food Delivered")
//         },1000)
//     })
// }

// async function order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()


// async function sample(){}
// console.log(sample())

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// console.log("first line")
// try{
//     // let sample=324
//     // console.log(sample)
//     let age=19
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("finally block")
// }
// console.log("last line")


// async function getData(){
//     try{
//         const response= await  fetch("https://dummyjson.com/products/")
//         console.log(response)
//         console.log(response.ok,response.status)
//         if(response.ok===false)throw new Error("Data not found")
//         const data=await response.json()
//         console.log(data)
//         // data.products.forEach((ele)=>{
//         //     console.log(ele.price)
//         // })
//     }catch(error){
//         console.log("Data not found")
//     }
// }

// getData()


// async function sendData(){
//     try{
//         const response=await fetch('https://dummyjson.com/products/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 title:"Macbook",
//                 description:"Macbook Pro",
//                 price:100000,
//                 discountPercentage:5,
//                 rating:4.5,
//                 stock:5,
//                 brand:"Apple",
//             })
//         })

//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data not found")
//     }
// }
// sendData()

let obj={
    title:"Macbook",
    description:"Macbook Pro",
}

// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name","Devendra")
// localStorage.setItem("age",23)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))


// localStorage.removeItem("age")

// localStorage.clear()


//  sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name","Devendra")
// sessionStorage.setItem("age",23)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))
// sessionStorage.removeItem("age")


// document.cookie="name=Devendra; expires=Sat 21 Feb 2026 12:00:00 UTC"
// document.cookie="age=23; expires=Sat 21 Feb 2026 12:00:00 UTC"


// console.log(document.cookie)


// async function sample() {
//     await fetch("http://127.0.0.1:5500/index.html")
// }
// sample()

// function* generate(){
//     // yield 1
//     // yield 2
//     // yield 3

//     // for (let index = 1; index < 4; index++) {
//     //     yield index
        
//     // }
//     let i=1;
//     while(true){
//         yield i
//         i++
//     }
// }

// const gen=generate()

// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function add(a,b,c){
//     return a+b+c
// }

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// // console.log(add(1)(2)(3)) //first way

// const first=add(1)
// const second=first(2)
// const third=second(3)
// console.log(third)
// console.log(third)

// const API_KEY="0133cc5316757ac730cc46ae342334e4"
// const form=document.querySelector("#weather_form")
// const weatherInfo=document.querySelector(".info")
// const history=document.querySelector(".history")
// let historyData=[]

// form.addEventListener('submit',async(e)=>{
//     e.preventDefault()
//     const data=city.value
//     if(data){
//         getData(data)
//     }

// })

// async function getData(data){
//     try{
//             const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`)
//             const weatherData=await response.json()
//             if(weatherData.cod===200){
//                 weatherInfo.innerHTML=`<h3>Weather Info</h3>
//                 <p>City: ${weatherData.name}</p>
//                 <p>Temp: ${(weatherData.main.temp-273).toFixed(1)}C</p>
//                 <p>Weather: ${weatherData.weather[0].main}</p>
//                 <p>Humidity: ${weatherData.main.humidity}</p>
//                 <p>Speed: ${weatherData.wind.speed}m/s</p>`
//             if(historyData.includes(data)===false){
//                 historyData.push(data)
//                 localStorage.setItem("history",JSON.stringify(historyData))
//             }
//             showHistory()
//             }else{
//                 weatherInfo.innerHTML=`<h3>Weather Info</h3><p>City not found</p>`
//             }
//         }catch(error){
//             console.log(error)
//         }
// }

// function showHistory(){
//     history.innerHTML=""
//     if(localStorage.getItem("history")){
//         historyData=JSON.parse(localStorage.getItem("history"))
//         historyData.forEach((ele)=>{
//             const li=document.createElement("button")
//             li.textContent=ele
//             history.appendChild(li)
//             li.addEventListener('click',()=>{
//                 getData(ele)
//             })
//         })
//     }
// }

// showHistory()

console.log(document)