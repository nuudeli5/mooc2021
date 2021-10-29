import React, { useState } from 'react'


const App = () => {
     
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('Aku Ankka')
    const [newNumber, setNewNumber] = useState('0401234')
    const [searchStr, setSearchStr] = useState('Aku Ankka')
    const [showAll, setShowAll] = useState(0)



    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        //console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSearchStringChange = (event) => {
        //console.log(event.target.value)
        setSearchStr(event.target.value)
    }

    const pushName = (event) => {
        //console.log('button clicked', event.target)
        //console.log(persons)

        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        //id: persons.length + 1

        }

        const names = persons.map(name => name.name.toLowerCase())

        console.log(!names.includes(newName))

        if (!names.includes(newName.toLowerCase()) === true) {
            setPersons(persons.concat(personObject))
        }
        else {
            window.alert(newName +" is already added to phonebook");
        }
        setNewName('')
        console.log(persons)
    }



    const showPeople = showAll
        ? persons            //            {showPeople.map(person => <li> </li>)}
        : persons.filter(persons => persons.name.toLowerCase() === searchStr.toLowerCase())

    /*
    const checkDublicates = () => {

            const result = persons.find(({ name }) => name === newName);

            console.log(result) // { name: 'cherries', quantity: 5 }

        return (
            result
        )
    }*/

    //console.log(persons[0])
    //console.log(newName)

    //console.log(names.includes(newName))


    return (
        <div>
            <h2>Phonebook</h2>

            Search: <input value={searchStr} onChange={handleSearchStringChange} />
            <button onClick={() => setShowAll(!showAll)}>
                 {showAll ? 'search' : 'all'}
            </button>
            <div>
            <h2> Add new </h2>
            </div>
            <form onSubmit={pushName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>

                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit" >add</button>

                </div>
            </form>
            <p>  Adding: {newName} </p>



            <h2>Numbers</h2>

            <p > {showPeople.map(name => <li key={name.name}> {name.name} {name.number}</li>)} </p>



        </div>
    )

}

export default App