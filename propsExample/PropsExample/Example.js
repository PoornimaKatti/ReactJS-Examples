import React from 'react'

const Example = (props) =>{
    console.log(props)
  return (
    <div>
      <h1>
    Hello {Example.name}  a.k.a {Example.heroName} 
    </h1>
    {Example.children}
    </div>
  
  )
}
export default Example
