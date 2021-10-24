import React, { useState } from 'react'


const App = () => {
     
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('Aku Ankka')
    const [showAll, setShowAll] = useState(true)



    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const pushName = (event) => {
        console.log('button clicked', event.target)
        console.log(persons)

        event.preventDefault()
        const personObject = {
            name: newName
        //id: persons.length + 1

        }

        setPersons(persons.concat(personObject))
        setNewName('')
        console.log(persons)
    }

    const showPeople = showAll
        ? persons            //            {showPeople.map(person => <li> </li>)}
        : persons

    console.log(persons[0])
    console.log(newName)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={pushName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit" >add</button>

                </div>
            </form>
            <p>  Adding: {newName} </p>
            <h2>Numbers</h2>

            <p key={persons.name}> {persons.map(name => <li> {name.name} </li>)} </p>

        </div>
    )

}

export default App