import React from 'react'

 function NameList() {
  const names =['sonu','yash', 'rushab']
  const persons =[
    {
        id:1,
        name:'sonu',
        age:10,
        skills:'React'
    },
    {
        id:1,
        name:'sonu',
        age:10,
        skills:'React'
    },

    {
        id:1,
        name:'sonu',
        age:10,
        skills:'React'
    },


  ]
  const nameList = names.map((name,index) =><h2 key ={index}>{index}{name}</h2>)
  return <div>{nameList}</div>
  
}
export default NameList