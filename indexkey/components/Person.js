import React from 'react'
 function Person({Person,key}) {
  return (
    <div>
        <h2>
         {key} I am {person.name}.I am {person.age}year old.I know {person.skill}
        </h2>
      
    </div>
  )
}

export default Person