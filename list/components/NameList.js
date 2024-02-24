import React from 'react'
import Person from './Person'
 function NameList() {

    const persons=[
        {
            id:1,
            name:'poornima',
            age:20,
            skill:'React'

        },
        {
            id:2,
            name:'arunima',
            age:21,
            skill:'Angular'

        },
        {
            id:3,
            name:'pooja',
            age:22,
            skill:'Java'

        }
    ]
    
    const personList = persons.map(person => <Person key={person.name} person ={person}/>)
    
 return <div>{personList}</div>

}
export default NameList